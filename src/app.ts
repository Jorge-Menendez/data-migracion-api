import * as express from 'express';
import pacientesRoutes from './routes/pacientes.routes';
import presupuestosRoutes from './routes/presupuestos.routes';
import productosRoutes from './routes/productos.routes';
import tratamientosRoutes from './routes/tratamientos.routes';

const app = express();
app.use(express.json());

app.use('/api/pacientes', pacientesRoutes);
app.use('/api/presupuestos', presupuestosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/tratamientos', tratamientosRoutes);

export default app;
