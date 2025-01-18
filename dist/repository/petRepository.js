"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.findAll = void 0;
const petshopRepository_1 = require("./petshopRepository");
//buscando todos os animais de determinado petshop
const findAll = (cnpj) => {
    const petshopReference = (0, petshopRepository_1.findByCnpj)(cnpj);
    return petshopReference == null ? null : petshopReference.getPets();
};
exports.findAll = findAll;
const save = (pet, cnpj) => {
    const petshop = (0, petshopRepository_1.findByCnpj)(cnpj);
    if (petshop != null) {
        petshop.getPets().push(pet);
        return pet;
    }
    return null;
};
exports.save = save;
