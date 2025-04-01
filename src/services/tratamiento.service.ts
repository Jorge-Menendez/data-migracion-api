import db from "../config/database";
import {TABLE} from "../config/constants"
import { DetallesPresupuestosDto} from "../dto/presupuesto.dto"
import { Tratamiento } from "../models/tratamiento.model"

export class TratamientoService {

    static async obtenerTratamientos() {
        return await db(TABLE.TRATAMIENTOS).select("*");
    }

    static async migrarTratamientos(tratamientosExcel: DetallesPresupuestosDto[]) {
        const promesas = tratamientosExcel.map(async (tratamientoExcel) => {
            const tratamiento: Tratamiento = {
                nombre_tratamiento: tratamientoExcel.conceptoNombre,
                descripcion: tratamientoExcel.conceptoNombre,
                duracion: 30,
                precio: tratamientoExcel.conceptoPrecio,
                id_clinica: 63,
                id_super_clinica: 47,
                id_tipo_iva: 1,
                id_estado_registro: 1
            };

            return db(TABLE.TRATAMIENTOS).insert(tratamiento);
        });

        await Promise.all(promesas);
    }

}
