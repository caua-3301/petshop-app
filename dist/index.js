"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const petshopRoutes_1 = __importDefault(require("./routes/petshopRoutes"));
const petRoutes_1 = __importDefault(require("./routes/petRoutes"));
require('dotenv').config();
const app = (0, express_1.default)();
//habilitando o cors (cross-origin resoucer sharing)
app.use((0, cors_1.default)());
//middlewere responsável pelo tratamento do corpo das requisições
app.use(express_1.default.json());
//rotas
app.use('/petshop', petshopRoutes_1.default);
app.use('/pets', petRoutes_1.default);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`server listening in http://localhost:${process.env.SERVER_PORT}`);
});
