"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../../infra/controllers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/users', controllers_1.controllers.userController.create);
userRouter.get('/users', controllers_1.controllers.userController.get);
userRouter.get('/users/:id', controllers_1.controllers.userController.getById);
userRouter.put('/users/:id', controllers_1.controllers.userController.update);
userRouter.delete('/users/:id', controllers_1.controllers.userController.delete);
