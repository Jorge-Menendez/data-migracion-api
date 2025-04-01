import db from "../config/database";
import {getDataExcel, readExcel} from "../utils/excelReader";
import {FILE, TABLE} from "../config/constants"
import {Presupuesto, DetallePresupuesto} from "../models/presupuesto.model"
import {PresupuestoDto, DetallesPresupuestosDto} from "../dto/presupuesto.dto"
import {Util} from "../utils/util";
import {TratamientoService as tratamientoService} from "./tratamiento.service";
import {ProductoService as productoService} from "./producto.service";

export class PresupuestoService {

    static async obtenerPresupuestos() {
        return await db(TABLE.PRESUPUESTOS).select("*");
    }

    static async migrarPresupuestos() {
        const presupuestosExcel: PresupuestoDto[] = getDataExcel(FILE.PRESUPUESTO);

        for (const presupuesto of presupuestosExcel) {
            const presupuestoDb: Presupuesto = {
                id_presupuesto:presupuesto.dataid,
                id_paciente: presupuesto.dataidpaciente,
                id_super_clinica: 47,
                id_clinica: 63,
                fecha: Util.convertirFecha(presupuesto.fecha),
                url_presupuesto: "",
                monto_total: Util.formatearMonto(presupuesto.total),
                monto_pagado: Util.formatearMonto(presupuesto.total),
                saldo_pendiente: 0.00,
                id_estado: 1,
                id_tipo_pago: 1,
                old_id: 0,
                id_estado_registro: 1,
                numero_historia: presupuesto.numero,
                id_contacto: null,
                usuario_creacion: null,
                id_usuario_creacion: null
            }
            await db(TABLE.PRESUPUESTOS).insert(presupuestoDb);
        }
    }

    static async obtenerPresupuesto(id: number){
        return await db(TABLE.PRESUPUESTOS).select("*").where("id_presupuesto", id);
    }

    static async migrarPresupuestosDetalle() {
        const detallePresupuestosExcel: DetallesPresupuestosDto[] = readExcel(FILE.PRESUPUESTO_DETALLE);

        //Se analizo que conceptoIdArticulo cuando es -1 es un tratamiento
        await tratamientoService.migrarTratamientos(
            Array.from(
                new Map(
                    detallePresupuestosExcel
                        .filter((tratamiento) => tratamiento.conceptoIdArticulo === -1)
                        .map((tratamiento) => [tratamiento.conceptoNombre, tratamiento])
                ).values()
            )
        )

        await productoService.migrarProductos(
            Array.from(
                new Map(
                    detallePresupuestosExcel
                        .filter((producto) => producto.conceptoIdArticulo !== -1)
                        .map((producto) => [producto.conceptoIdArticulo, producto])
                ).values()
            )
        )
        ///////////////////////

        for (const detalleExcel of detallePresupuestosExcel) {
            const detalleDb: DetallePresupuesto = {
                id_detalle_presupuesto: detalleExcel.conceptoId,
                id_presupuesto: detalleExcel.id_presupuesto,
                id_tratamiento: null,
                item: 0,
                descripcion: '',
                cantidad: detalleExcel.conceptoCantidad,
                precio: detalleExcel.conceptoPrecio,
                descuento: detalleExcel.conceptoDescuento,
                id_tipo_iva: null,
                total_item: (detalleExcel.conceptoDescuento = 0.00)? detalleExcel.conceptoPrecio: Util.calcularDescuento(detalleExcel.conceptoPrecio,detalleExcel.conceptoDescuento),
                id_producto: (detalleExcel.conceptoIdArticulo === -1)?null:detalleExcel.conceptoIdArticulo,
                old_id: 0
            }

            await db(TABLE.PRESUPUESTO_DETALLE).insert(detalleDb);

        }


    }

}
