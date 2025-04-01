import { Request, Response } from "express";
import { PacienteService } from "../services/paciente.service";
import { successResponse, errorResponse } from "../utils/responseHelper";
import { Paciente } from "../models/paciente.model"
import logger from "../utils/logger";

export class PacienteController {
    static async obtenerPacientes(req: Request, res: Response) {
        try {
            logger.info("Obteniendo pacientes.");
            const pacientes: Paciente [] = await PacienteService.obtenerPacientes();
            logger.info("Se obtuvieron los pacientes correctamente");
            successResponse(res, "Lista de pacientes obtenida correctamente", pacientes);
        } catch (error) {
            if(error instanceof Error){
                logger.error(`Error al obtener los pacientes: ${error.message}`);
                errorResponse(res, "Error al obtener los pacientes.", error.message);
            }
            else{
                logger.error(`Error desconocido al obtener los pacientes`);
                errorResponse(res, "Error al obtener los pacientes.", 'Error desconocido.');
            }

        }
    }

    static async obtenerPacientePorId (req: Request, res: Response) {
        try {
            const { id } = req.params;
            logger.info("Obteniendo pacientes.");
            const paciente : Paciente[] = await PacienteService.obtenerPaciente(Number(id));

            if (paciente.length!=0) {
                successResponse(res, `Se encontro paciente con id: ${id}`, paciente[0]);
                logger.info("Se encontro paciente:", paciente[0]);
            }else{
                errorResponse(res, "No se encontro paciente.", {});
            }

        } catch (error) {
            if(error instanceof Error){
                logger.error(`Error al obtener los pacientes: ${error.message}`);
                errorResponse(res, "Error al obtener los pacientes.", error.message);
            }
            else{
                logger.error(`Error desconocido al obtener los pacientes`);
                errorResponse(res, "Error al obtener los pacientes.", 'Error desconocido.');
            }

        }
    }
}
