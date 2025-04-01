import * as dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno desde .env

export const CONFIG = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || "development",
    DB_HOST: process.env.DB_HOST || "localhost",
    API_KEY: process.env.API_KEY || "default_api_key",
};

export const MESSAGES = {
    SUCCESS: (resource: string) => `${resource} obtenido correctamente`,
    ERROR: (action: string) => `Error al ${action} los datos`
};

export const STATUS_CODES = {
    SUCCESS: 200,
    CREATED: 201,
    CUSTOM_ERROR: Number(process.env.CUSTOM_ERROR_CODE) || 450
};

export const  MIGRATE = {
    TITLE_START: `========== INICIO DE LA MIGRACION ==========`,
    START :  (resource: string) => `Migrando ${resource}.`,
    END :  (resource: string) => `Migracion de ${resource} finalizada.`,
    ERROR_UNKNOWN : (resource: string) => `Error desconocido al migrar ${resource}.`,
    ERROR : (resource: string) => `Hubo un error en la migracion de ${resource}`,
    TITLE_FIN: `========== FIN DE LA MIGRACION ==========`
}

export const RESOURCE = {
    PACIENTE: 'Pacientes',
    PRESUPUESTO: 'Presupuesto',
    PRESUPUESTO_DETALLE: 'Presupuesto_Detalle',
}

export const FILE = {
    PACIENTE: './data/pacientes.xlsx',
    PRESUPUESTO: './data/presupuestos.xlsx',
    PRESUPUESTO_DETALLE: './data/presupuestos_detalle.xlsx',
}

export const TABLE = {
    PACIENTES: 'pacientes',
    PRESUPUESTOS: 'presupuestos',
    PRESUPUESTO_DETALLE: 'detalle_presupuesto',
    PRODUCTOS: 'productos',
    TRATAMIENTOS: 'tratamientos'
}