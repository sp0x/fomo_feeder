import "reflect-metadata"
import { DataSource } from "typeorm"
import { Feed } from "./entity/feed"

const environment = process.env.NODE_ENV || "development"
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: `${environment}.db`,
    entities: [Feed],
    migrations: ["migrations/**/*.ts"],
    subscribers: [],
})
