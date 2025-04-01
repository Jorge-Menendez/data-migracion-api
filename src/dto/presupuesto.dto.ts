export interface PresupuestoDto {
    fecha: string;
    numero: string;
    paciente: string;
    compania: string;
    titulo: string;
    completado: boolean;
    caducidad: string;
    total: string;
    dataid: number;
    dataidpaciente: number;
    datanombre: string;
    dataidcompania: string;
}

export interface DetallesPresupuestosDto {
    id_presupuesto: number;
    idPaciente: number;
    fecha: Date | string;
    titulo: string;
    codPresupuesto: string;
    caducidad: Date | string;
    nombrePac: string;
    idCompania: number;
    observaciones?: string;
    observacionesPrivadas?: string;
    conceptoEdited: number;
    conceptoId: number;
    conceptoFacturable: number;
    conceptoTipo: number;
    conceptoIdArticulo: number;
    conceptoIdEspecialidad: number;
    conceptoNombre: string;
    conceptoCantidad: number;
    conceptoPrecio: number;
    conceptoTDescuento: number;
    conceptoDescuento: number;
    conceptoContratoFacultativo: number;
    conceptoIva: number;
}