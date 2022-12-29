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
exports.UserModel = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserModel {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.create({ data: user });
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.findMany();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield prisma.user.findUnique({ where: { id } });
            if (data !== null) {
                return data;
            }
            return null;
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.update({ where: { id }, data: user });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.user.delete({ where: { id } });
        });
    }
}
exports.UserModel = UserModel;
