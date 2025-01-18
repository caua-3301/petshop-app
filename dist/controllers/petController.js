"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.updateOnce = exports.update = exports.save = exports.findAll = exports.status = void 0;
const petService_1 = require("../service/petService");
const PetDAO_1 = require("../models/dao/PetDAO");
const status = (req, res) => {
    res.send("200 OK").status(200);
};
exports.status = status;
const findAll = (req, res) => {
    const { cnpj } = req.query;
    const pets = (0, petService_1.findAll)(res, cnpj);
    if (pets != null) {
        res.status(200).send(pets);
    }
};
exports.findAll = findAll;
const save = (req, res) => {
    //dados
    const content = req.body;
    const cnpj = req.headers.cnpj;
    const petDAO = new PetDAO_1.PetDAO(content.name, content.type, content.description, content.deadline_vaccination);
    const pet = (0, petService_1.save)(res, petDAO, cnpj);
    if (pet != null) {
        res.status(201).send(pet);
    }
};
exports.save = save;
const update = (req, res) => {
    const { cnpj } = req.headers;
    const { id } = req.query;
    const content = req.body;
    const petDAO = new PetDAO_1.PetDAO(content.name, content.type, content.description, content.deadline_vaccination);
    const pet = (0, petService_1.update)(res, petDAO, cnpj, id);
    if (pet == null) {
        res.status(404).send({
            message: "petshop ou pet não encontrado"
        });
    }
    else {
        res.status(200).send(pet);
    }
};
exports.update = update;
const updateOnce = (req, res) => {
    const { cnpj } = req.headers;
    const { id } = req.params;
    const result = (0, petService_1.updateOnce)(cnpj, id);
    if (result) {
        res.status(200).send("200 OK");
    }
    else {
        res.status(404).send({
            message: "peshop ou pet não encontrados"
        });
    }
};
exports.updateOnce = updateOnce;
const deletePet = (req, res) => {
    const { cnpj } = req.headers;
    const { id } = req.params;
    const result = (0, petService_1.deleteService)(cnpj, id);
    if (result) {
        res.status(200).send("200 OK");
    }
    else {
        res.status(404).send({
            message: "peshop ou pet não encontrados"
        });
    }
};
exports.deletePet = deletePet;
