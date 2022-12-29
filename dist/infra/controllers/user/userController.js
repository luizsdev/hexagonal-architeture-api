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
exports.UserController = void 0;
const userService_1 = require("../../services/user/userService");
const userModel_1 = require("../../models/user/userModel");
const createUserUseCase_1 = require("../../usecases/user/createUserUseCase");
const getUserUseCase_1 = require("../../usecases/user/getUserUseCase");
const updateUserUseCase_1 = require("../../usecases/user/updateUserUseCase");
const deleteUserUseCase_1 = require("../../usecases/user/deleteUserUseCase");
const getByIdUserUseCase_1 = require("../../usecases/user/getByIdUserUseCase");
const model = new userModel_1.UserModel();
const service = new userService_1.UserService(model);
const createClass = new createUserUseCase_1.CreateUseCase(service);
const getClass = new getUserUseCase_1.GetUserUseCase(service);
const getByIdClass = new getByIdUserUseCase_1.GetByIdUseCase(service);
const updateClass = new updateUserUseCase_1.UpdateUseCase(service);
const deleteClass = new deleteUserUseCase_1.DeleteUseCase(service);
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                createClass.create(req.body);
                return res.status(200).send({ message: 'User created' });
            }
            catch (err) {
                return res.status(400).send({ error: err });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield getClass.get();
                return res.status(200).send(users);
            }
            catch (err) {
                return res.status(400).send({ error: err });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield getByIdClass.getById(Number(req.params.id));
                return res.status(200).send(user);
            }
            catch (err) {
                return res.status(400).send({ error: err });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield updateClass.update(req.body, Number(req.params.id));
                return res.status(200).send(user);
            }
            catch (err) {
                return res.status(400).send({ error: err });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield deleteClass.delete(Number(req.params.id));
                return res.status(200).send(user);
            }
            catch (err) {
                return res.status(400).send({ error: err });
            }
        });
    }
}
exports.UserController = UserController;
