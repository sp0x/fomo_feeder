"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const db_1 = require("./database/db");
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || 'localhost';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, db_1.createDatabaseConnection)({ filename: 'main.db' });
        (0, routing_controllers_1.useContainer)(typedi_1.Container);
        typedi_1.Container.set('db', db);
        const app = (0, routing_controllers_1.createExpressServer)({
            controllers: [path_1.default.join(__dirname, '/controllers/*.ts')],
            middlewares: [path_1.default.join(__dirname, '/middlewares/*.ts')],
            interceptors: [path_1.default.join(__dirname, '/interceptors/*.ts')],
        });
        app.use(express_1.default.json());
        app.listen(port, host, () => {
            console.log(`Server running at http://${host}:${port}`);
        });
    });
}
main();
