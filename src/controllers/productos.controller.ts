import {Request, Response} from "express";
import { ProductoService as productoService } from "../services/producto.service";
import { successResponse, errorResponse } from "../utils/responseHelper";
import { Producto } from "../models/producto.model";
import logger from "../utils/logger";

export class ProductosController {
    static async obtenerProductos(req: Request, res: Response) {
        try {
            logger.info("Obteniendo productos.");
            const productos: Producto [] = await productoService.obtenerProductos();
            logger.info("Se obtuvieron los productos correctamente");
            successResponse(res, "Lista de productos obtenida correctamente", productos);
        } catch (error) {
            if(error instanceof Error){
                logger.error(`Error al obtener los productos: ${error.message}`);
                errorResponse(res, "Error al obtener los productos.", error.message);
            }
            else{
                logger.error(`Error desconocido al obtener los productos`);
                errorResponse(res, "Error al obtener los productos.", 'Error desconocido.');
            }

        }
    }

}
