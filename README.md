# Migración de Datos

## Descripción del Proyecto
Este proyecto tiene como objetivo desarrollar un sistema de migración de datos para una clínica dental que está trasladando su información desde un sistema heredado a una nueva base de datos con una estructura mejorada.

## Objetivos
- Desarrollar un script de migración en Node.js para leer archivos XLSX y transferir datos a MySQL.
- Implementar una API REST con Express.js para consultar los datos migrados.
- Garantizar la integridad referencial de los datos durante la migración.

## Estructura del Proyecto
```
/patient-api
│── /data       # Archivos Excel con la información a migrar
│   ├── pacientes.xlsx            # Datos de los pacientes
│   ├── presupuestos.xlsx         # Información de presupuestos
│   ├── presupuestos_detalle.xlsx # Detalles de cada presupuesto
│── /db         # Esquema de la base de datos
│── /logs       # Registros generados durante la migración
│── /scripts    # Scripts SQL y de migración
│   ├── db_schema.sql   # Creación de tablas
│   ├── migrate.js      # Script de migración
```

## Base de Datos
Tablas principales:
- `pacientes`
- `presupuestos`
- `detalle_presupuesto`
- `tratamientos`
- `productos`

Los scripts de creación de tablas están en `scripts/db_schema.sql`.

## API REST
- `GET /api/pacientes` - Lista de pacientes
- `GET /api/pacientes/:id` - Detalles de un paciente
- `GET /api/presupuestos` - Lista de presupuestos
- `GET /api/presupuestos/:id` - Detalles de un presupuesto
- `GET /api/tratamientos` - Lista de tratamientos
- `GET /api/productos` - Lista de productos

## Instalación y Ejecución
### 1. Clonar el repositorio
```bash
git clone <URL_REPOSITORIO>
cd patient-api
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear un archivo `.env` con:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=clinica
```

### 4. Ejecutar la migración
```bash
npm run migrate
```

### 5. Iniciar la API REST
```bash
npm run start
```

## Estrategia de Migración
1. Leer archivos Excel desde `data/` con `xlsx`.
2. Transformar datos según la nueva estructura.
3. Insertar datos en la base de datos con `knex.js`.
4. Validar relaciones y consistencia de datos.
5. Registrar logs en `logs/`.

## Decisiones Técnicas
- Uso de `knex.js` para la base de datos.
- Manejo de variables de entorno con `dotenv`.
- Implementación de `express.js` para la API REST.
- Uso de transacciones para garantizar consistencia.

## Scripts en `package.json`
El proyecto incluye los siguientes scripts:

- **`start`**: Inicia el servidor de la API.
  ```bash
  npm run start
  ```

- **`migrate`**: Ejecuta el script de migración de datos.
  ```bash
  npm run migrate
  ```

Estos comandos facilitan la ejecución y mantenimiento del sistema.

