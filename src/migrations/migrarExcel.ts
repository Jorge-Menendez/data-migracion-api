import { PacienteService as pacienteServices } from "../services/paciente.service";
import { PresupuestoService as presupuestoServices } from "../services/presupuesto.service";
import logger from "../utils/logger";
import { MIGRATE, RESOURCE } from "../config/constants";

async function migrarPacientes() {
    logger.info(MIGRATE.START(RESOURCE.PACIENTE));
    try {
        await pacienteServices.migrarPacientes();
        logger.info(MIGRATE.END(RESOURCE.PACIENTE));
    } catch (error:any) {
        logger.error(`${MIGRATE.ERROR(RESOURCE.PACIENTE)}:\n ${error.message}`);
    }
}

async function migrarPresupuesto() {
    logger.info(MIGRATE.START(RESOURCE.PRESUPUESTO));
    try {
        await presupuestoServices.migrarPresupuestos();
        logger.info(MIGRATE.END(RESOURCE.PRESUPUESTO));
    } catch (error: any) {
        logger.error(`${MIGRATE.ERROR(RESOURCE.PRESUPUESTO)}:\n ${error.message}`);
    }
}

async function migrarDetalles() {
    logger.info(MIGRATE.START(RESOURCE.PRESUPUESTO_DETALLE));
    try {
        await presupuestoServices.migrarPresupuestosDetalle();
        logger.info(MIGRATE.END(RESOURCE.PRESUPUESTO_DETALLE));
    } catch (error: any) {
        logger.error(`${MIGRATE.ERROR(RESOURCE.PRESUPUESTO_DETALLE)}:\n ${error.message}`);
    }
}

async function migrate() {
    logger.info(MIGRATE.TITLE_START);
    try {
        await migrarPacientes();
        await migrarPresupuesto();
        await migrarDetalles();
    } catch (error) {
        logger.error(`${error}`);
    } finally {
        process.exit();
    }
}

migrate()
    .then(() => logger.info(MIGRATE.TITLE_FIN))