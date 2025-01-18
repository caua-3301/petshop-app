"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Petshop = void 0;
const uuid_1 = require("uuid");
class Petshop {
    constructor(name, cnpj) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.cnpj = cnpj;
        this.pets = [];
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(value) {
        this.cnpj = value;
    }
    getPets() {
        return this.pets;
    }
    setPets(value) {
        this.pets = value;
    }
}
exports.Petshop = Petshop;
