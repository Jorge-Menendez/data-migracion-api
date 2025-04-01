import db from "../config/database";
import {getDataExcel} from "../utils/excelReader";
import {FILE, TABLE} from "../config/constants"
import {Paciente} from "../models/paciente.model"
import {PacienteDto} from "../dto/paciente.dto"
import {Util} from "../utils/util";

export class PacienteService {

    static async obtenerPacientes() {
        return await db(TABLE.PACIENTES).select("*");
    }

    static async migrarPacientes() {
        const pacientesExcel: PacienteDto[] = getDataExcel(FILE.PACIENTE);

        for (const paciente of pacientesExcel) {
            const pacienteDb: Paciente = {
                id_paciente: paciente.id,
                nombre : paciente.nombre,
                apellido: paciente.apellidos,
                email: paciente.email,
                telefono: (paciente.telefono)?paciente.telefono:paciente.movil,
                fecha_nacimiento: paciente.fechadenacimiento && !isNaN(new Date(paciente.fechadenacimiento).getTime())
                    ? new Date(paciente.fechadenacimiento)
                    : null
                ,
                id_sexo: null,
                direccion: null,
                ciudad: null,
                id_clinica: 63,
                codigo_postal: paciente.cpais,
                nif_cif: '0',
                referido: paciente.compania,
                id_super_clinica: 47,
                id_estado_registro: 1,
                id_cliente: null,
                lopd_aceptado: 0,
                importado: null,
                kommo_lead_id: null,
                old_id: Util.validarId(paciente.nuss),
                fecha_alta: paciente.fechadealta &&
                new Date(paciente.fechadealta).toISOString().split('T')[0] === '0000-00-00'
                    ? null
                    : new Date(paciente.fechadealta),
                usuario_creacion: 'importacion Critenias',
                id_usuario_creacion: null
            }
            await db(TABLE.PACIENTES).insert(pacienteDb);
        }
    }

    static async obtenerPaciente(id: number){
        return await db(TABLE.PACIENTES).select("*").where("id_paciente", id);
    }
}
