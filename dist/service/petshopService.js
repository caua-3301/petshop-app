"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCnpjExist = exports.save = void 0;
const Petshop_1 = require("../models/entity/Petshop");
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
const petshopRepository_1 = require("../repository/petshopRepository");
const isCnpjExist = (cnpj) => {
    const result = (0, petshopRepository_1.findByCnpj)(cnpj);
    return result != null;
};
exports.isCnpjExist = isCnpjExist;
const save = (res, petshop) => {
    const { name, cnpj } = petshop;
    //verificar formato do cnpj
    if (!cpf_cnpj_validator_1.cnpj.isValid(cnpj)) {
        res.status(400).send({
            message: "o cnpj não está em um formato válido"
        });
        return null;
    }
    //verificar se o cnpj informado já foi cadastrado
    if (isCnpjExist(cnpj)) {
        res.status(400).send({
            message: "o cnpj não já está cadastrado"
        });
        return null;
    }
    const petshopModel = new Petshop_1.Petshop(name, cnpj);
    (0, petshopRepository_1.save)(petshopModel);
    return petshopModel;
};
exports.save = save;
