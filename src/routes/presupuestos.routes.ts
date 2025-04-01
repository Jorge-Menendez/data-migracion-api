import { Router } from 'express';
import { PresupuestoController as presupuestoController } from '../controllers/presupuestos.controller';

const router = Router();
router.get('/', presupuestoController.obtenerPresupuestos);
router.get('/:id', presupuestoController.obtenerPresupuestoPorId);

export default router;
