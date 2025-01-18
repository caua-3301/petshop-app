"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petshopController_1 = require("../controllers/petshopController");
const petshopRouter = (0, express_1.Router)();
petshopRouter.post('/', petshopController_1.save);
petshopRouter.get('/', petshopController_1.status);
exports.default = petshopRouter;
