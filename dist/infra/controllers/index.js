"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const userController_1 = require("./user/userController");
exports.controllers = {
    userController: new userController_1.UserController(),
};
