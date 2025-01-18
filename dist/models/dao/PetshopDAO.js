"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetShopDAO = void 0;
class PetShopDAO {
    constructor(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
    }
    getName() {
        return this.name;
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.PetShopDAO = PetShopDAO;
