
import sqlite3 from 'sqlite3';
import sqlite, { open } from 'sqlite';

async function createDatabaseConnection(options: { filename: string }): Promise<sqlite.Database> {
    var database = await open({
        filename: options.filename,
        driver: sqlite3.Database
    });

    return database;
}


export { createDatabaseConnection }