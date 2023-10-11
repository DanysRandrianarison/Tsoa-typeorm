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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const data_source_1 = require("../data-source");
const userModel_1 = require("./userModel");
class UsersService {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const all_user = yield data_source_1.AppDataSource.getRepository(userModel_1.User).find();
            if (!all_user)
                console.log('none');
            return all_user;
        });
    }
    create(userCreationParams) {
        return Object.assign({ id: Math.floor(Math.random() * 10000) }, userCreationParams);
    }
}
exports.UsersService = UsersService;
