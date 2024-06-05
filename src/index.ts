import 'source-map-support/register';
import 'reflect-metadata';

import path from 'path';
import express, { Request, Response } from 'express';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

import feedRoutes from './routes/feeds';
import { createDatabaseConnection } from './database/db';

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || 'localhost';

async function main() {

    //const db = await createDatabaseConnection({ filename: 'main.db' });
    useContainer(Container);
    //import { AppDataSource } from "./index"
    //const photoRepository = AppDataSource.getRepository(Photo)


    const app = createExpressServer({
        controllers: [path.join(__dirname, '/controllers/*.ts')],
        middlewares: [path.join(__dirname, '/middlewares/*.ts')],
        interceptors: [path.join(__dirname, '/interceptors/*.ts')],
    });

    app.use(express.json());

    app.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`);
    });
}

main();