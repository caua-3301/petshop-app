"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.status = void 0;
const petshopService_1 = require("../service/petshopService");
const PetshopDAO_1 = require("../models/dao/PetshopDAO");
const status = (req, res) => {
    res.send("200 OK").status(200);
};
exports.status = status;
const save = (req, res) => {
    //consultar a camada de service que tem acesso ao banco
    const petshopDAO = new PetshopDAO_1.PetShopDAO(req.body.name, req.body.cnpj);
    const result = (0, petshopService_1.save)(res, petshopDAO);
    if (result != null) {
        res.status(201).send(result);
    }
};
exports.save = save;
