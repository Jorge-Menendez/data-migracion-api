
export interface Paciente {
    id_paciente: number;
    nombre: string;
    apellido: string;
    email?: string;
    telefono: string;
    fecha_nacimiento?: Date | null;
    id_sexo?: number | null;
    direccion?: string | null;
    ciudad?: string | null;
    id_clinica?: number | null;
    codigo_postal: string;
    nif_cif: string;
    referido?: string | null;
    id_super_clinica: number;
    id_estado_registro?: number | null;
    id_cliente?: number | null;
    lopd_aceptado: number;
    importado?: number | null;
    kommo_lead_id?: string | null;
    old_id: number | null;
    fecha_alta?: Date | null;
    fecha_creacion?: Date | null;
    fecha_modificacion?: Date | null;
    usuario_creacion?: string | null;
    id_usuario_creacion?: number | null;
}