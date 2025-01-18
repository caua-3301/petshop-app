"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByCnpj = exports.save = void 0;
const database_1 = require("../database/database");
const database = (0, database_1.getDatabase)();
const save = (petshop) => {
    database.push(petshop);
};
exports.save = save;
const findByCnpj = (cnpj) => {
    let result = null;
    database.forEach(petshop => {
        if (petshop.getCnpj() == cnpj) {
            result = petshop;
        }
    });
    return result;
};
exports.findByCnpj = findByCnpj;
