import { Router } from 'express';
import { PacienteController as pacienteController } from "../controllers/pacientes.controller";

const router = Router();
router.get("/", pacienteController.obtenerPacientes);
router.get("/:id", pacienteController.obtenerPacientePorId);

export default router;

