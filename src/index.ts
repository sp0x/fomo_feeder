import 'source-map-support/register';
import 'reflect-metadata';

import path from 'path';
import express, { Request, Response } from 'express';
import { createExpressServer, useContainer as rcUseContainer } from 'routing-controllers';
import { Container } from 'typedi';

import { AppDataSource as dataSource } from './data-source';


const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || 'localhost';

async function main() {

    //const db = await createDatabaseConnection({ filename: 'main.db' });
    rcUseContainer(Container);
    //import { AppDataSource } from "./index"
    //const photoRepository = AppDataSource.getRepository(Photo)
    await dataSource.initialize();
    const feedRepository = dataSource.getRepository('Feed');
    Container.set('FeedRepository', feedRepository);

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