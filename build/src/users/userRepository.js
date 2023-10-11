"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRespository = void 0;
const data_source_1 = require("../data-source");
const userModel_1 = require("./userModel");
const UserRespository = () => data_source_1.AppDataSource.getRepository(userModel_1.User);
exports.UserRespository = UserRespository;
