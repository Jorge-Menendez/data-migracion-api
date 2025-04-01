export interface Producto {
    id_producto?: number;
    nombre_producto?: string | null;
    descripcion?: string | null;
    stock?: number | null;
    precio?: number | null;
    id_clinica?: number | null;
    id_super_clinica: number;
    id_tipo_iva: number;
    id_estado_registro: number;
    codigo?: string | null;
    codigo_barras?: string | null;
    proveedor?: string | null;
    precio_costo?: number | null;
    descuento?: number | null;
    fecha_creacion?: Date | null;
    fecha_modificacion?: Date | null;
    usuario_creacion?: string | null;
    id_usuario_creacion?: number | null;
}
