import db from "../config/database";
import {TABLE} from "../config/constants"
import { DetallesPresupuestosDto} from "../dto/presupuesto.dto"
import { Producto } from "../models/producto.model"

export class ProductoService {

    static async obtenerProductos() {
        return await db(TABLE.PRODUCTOS).select("*");
    }

    static async migrarProductos(productosExcel: DetallesPresupuestosDto[]) {
        const promesas = productosExcel.map(async (productoExcel) => {
            const producto: Producto = {
                id_producto: productoExcel.conceptoIdArticulo,
                nombre_producto: productoExcel.conceptoNombre,
                descripcion: productoExcel.conceptoNombre,
                stock: productoExcel.conceptoCantidad,
                precio: productoExcel.conceptoPrecio,
                id_clinica: 63,
                id_super_clinica: 47,
                id_tipo_iva: 1,//productoExcel.conceptoIva,
                id_estado_registro: 1,
                codigo: null,
                codigo_barras: null,
                proveedor: null,
                precio_costo: null,
                descuento: productoExcel.conceptoDescuento,
                usuario_creacion: null,
                id_usuario_creacion: null
            };

            return db(TABLE.PRODUCTOS).insert(producto);
        });

        await Promise.all(promesas);
    }


}
