import {Request, Response} from "express";
import { TratamientoService as tratamientoervice } from "../services/tratamiento.service";
import { successResponse, errorResponse } from "../utils/responseHelper";
import { Tratamiento } from "../models/tratamiento.model";
import logger from "../utils/logger";

export class TratamientosController {
    static async obtenerTratamiento(req: Request, res: Response) {
        try {
            logger.info("Obteniendo Tratamiento.");
            const Tratamiento: Tratamiento [] = await tratamientoervice.obtenerTratamientos();
            logger.info("Se obtuvieron los Tratamientos correctamente");
            successResponse(res, "Lista de tratamientos obtenida correctamente", Tratamiento);
        } catch (error) {
            if(error instanceof Error){
                logger.error(`Error al obtener los tratamiento: ${error.message}`);
                errorResponse(res, "Error al obtener los tratamiento.", error.message);
            }
            else{
                logger.error(`Error desconocido al obtener los tratamiento`);
                errorResponse(res, "Error al obtener los tratamiento.", 'Error desconocido.');
            }

        }
    }

}
