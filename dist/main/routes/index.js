"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRouter_1 = require("./user/userRouter");
const router = (0, express_1.Router)();
exports.router = router;
router.use(userRouter_1.userRouter);
