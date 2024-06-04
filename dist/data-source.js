"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const feed_1 = require("./entity/feed");
const environment = process.env.NODE_ENV || "development";
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: `${environment}.db`,
    entities: [feed_1.Feed],
    migrations: [],
    subscribers: [],
});
