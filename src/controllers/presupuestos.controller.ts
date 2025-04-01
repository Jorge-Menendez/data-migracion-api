import { Request, Response } from "express";
import { PresupuestoService as presupuestoService } from "../services/presupuesto.service";
import { successResponse, errorResponse } from "../utils/responseHelper";
import { Presupuesto } from "../models/presupuesto.model"
import logger from "../utils/logger";

export class PresupuestoController {
    static async obtenerPresupuestos(req: Request, res: Response) {
        try {
            logger.info("Obteniendo Presupuestos.");
            const presupuestos: Presupuesto[] = await presupuestoService.obtenerPresupuestos();
            logger.info("Se obtuvieron los presupuestos correctamente");
            successResponse(res, "Lista de presupuestos obtenida correctamente", presupuestos);
        } catch (error) {
            if(error instanceof Error){
                logger.error(`Error al obtener los presupuestos: ${error.message}`);
                errorResponse(res, "Error al obtener los presupuestos.", error.message);
            }
            else{
                logger.error(`Error desconocido al obtener los presupuestos`);
                errorResponse(res, "Error al obtener los presupuestos.", 'Error desconocido.');
            }

        }
    }

    static async obtenerPresupuestoPorId (req: Request, res: Response) {
        try {
            const { id } = req.params;
            logger.info("Obteniendo Presupuesto.");
            const Presupuesto : Presupuesto[] = await presupuestoService.obtenerPresupuesto(Number(id));

            if (Presupuesto.length!=0) {
                successResponse(res, `Se encontro presupuesto con id: ${id}`, Presupuesto[0]);
                logger.info("Se encontro presupuesto:", Presupuesto[0]);
            }else{
                errorResponse(res, "No se encontro presupuesto.", {});
            }

        } catch (error) {
            if(error instanceof Error){
                logger.error(`Error al obtener los presupuestos: ${error.message}`);
                errorResponse(res, "Error al obtener los presupuestos.", error.message);
            }
            else{
                logger.error(`Error desconocido al obtener los presupuestos`);
                errorResponse(res, "Error al obtener los Presupuestos.", 'Error desconocido.');
            }

        }
    }
}
