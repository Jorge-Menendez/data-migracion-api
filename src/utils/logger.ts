import * as winston from "winston";

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Muestra logs en consola
        new winston.transports.File({ filename: "logs/error.log", level: "error" }), // Guarda errores en un archivo
        new winston.transports.File({ filename: "logs/combined.log" }) // Guarda todos los logs
    ]
});

// Si esta en desarrollo, imprime logs en consola con formato colorido
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export default logger;
