import { Router } from 'express';
import { ProductosController as productosController } from '../controllers/productos.controller';

const router = Router();
router.get("/", productosController.obtenerProductos);

export default router;

