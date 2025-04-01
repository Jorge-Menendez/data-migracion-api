import knex from 'knex';
import * as dotenv from 'dotenv';
import { knexSnakeCaseMappers } from "objection";

dotenv.config();

const db = knex({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT)
    },
    ...knexSnakeCaseMappers()
});

export default db;
