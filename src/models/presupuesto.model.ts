export interface Presupuesto {
    id_presupuesto?: number;
    id_paciente: number;
    id_super_clinica: number;
    id_clinica: number;
    fecha: Date;
    url_presupuesto?: string;
    monto_total: number;
    monto_pagado?: number;
    saldo_pendiente?: number;
    id_estado?: number;
    id_tipo_pago?: number | null;
    old_id: number;
    id_estado_registro?: number | null;
    numero_historia?: string | null;
    id_contacto?: number | null;
    fecha_creacion?: Date;
    fecha_modificacion?: Date;
    usuario_creacion?: string| null;
    id_usuario_creacion?: number | null;
}
export interface DetallePresupuesto {
    id_detalle_presupuesto?: number;
    id_presupuesto: number;
    id_tratamiento?: number | null;
    item: number;
    descripcion: string;
    cantidad: number;
    precio: number;
    descuento: number;
    id_tipo_iva?: number | null;
    total_item: number;
    id_producto?: number | null;
    old_id: number;
}