"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const userModel_1 = require("./users/userModel");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "motdepasse",
    database: "tabtracker",
    logging: false,
    entities: [userModel_1.User],
    migrations: ['src/migration/*ts'],
    subscribers: []
});
