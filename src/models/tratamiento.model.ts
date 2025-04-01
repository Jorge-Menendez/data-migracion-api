export interface Tratamiento {
    id_tratamiento?: number;
    nombre_tratamiento?: string | null;
    descripcion?: string | null;
    duracion?: number | null;
    precio?: number | null;
    id_clinica?: number | null;
    id_super_clinica: number;
    id_tipo_iva: number;
    id_estado_registro: number;
}
