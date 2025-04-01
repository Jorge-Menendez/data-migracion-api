import { Router } from 'express';
import { TratamientosController as tratamientosController } from '../controllers/tratamientos.controller';

const router = Router();
router.get('/', tratamientosController.obtenerTratamiento);

export default router;
