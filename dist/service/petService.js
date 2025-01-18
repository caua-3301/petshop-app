"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateOnce = exports.update = exports.save = exports.findAll = void 0;
const Pet_1 = require("../models/entity/Pet");
const petRepository_1 = require("../repository/petRepository");
const petshopService_1 = require("./petshopService");
const petshopRepository_1 = require("../repository/petshopRepository");
const findAll = (res, cnpj) => {
    const response = (0, petRepository_1.findAll)(cnpj);
    if (response == null) {
        res.status(404).send({
            message: "o cnpj não está cadastrado"
        });
        return null;
    }
    return response;
};
exports.findAll = findAll;
const save = (res, petDAO, cnpj) => {
    const pet = new Pet_1.Pet(petDAO.name, petDAO.type, petDAO.description, petDAO.deadline_vaccination);
    //verificado se o cnpj está cadastrado
    if (!(0, petshopService_1.isCnpjExist)(cnpj)) {
        res.status(404).send({
            message: "o usuário (petshop) informado não está cadastrado"
        });
        return null;
    }
    const result = (0, petRepository_1.save)(pet, cnpj);
    return result;
};
exports.save = save;
const update = (res, petDAO, cnpj, id) => {
    //verificado se o cnpj está cadastrado
    if (!(0, petshopService_1.isCnpjExist)(cnpj)) {
        return null;
    }
    const petShop = (0, petshopRepository_1.findByCnpj)(cnpj);
    let petModified = null;
    petShop === null || petShop === void 0 ? void 0 : petShop.getPets().forEach(pet => {
        if (pet.getId() == id) {
            pet.setName(petDAO.name);
            pet.setDescription(petDAO.description);
            pet.sesType(petDAO.type);
            pet.setDedalineVaccination(new Date(petDAO.deadline_vaccination));
            petModified = pet;
        }
    });
    if (petModified == null) {
        return null;
    }
    (0, petshopRepository_1.save)(petShop);
    return petModified;
};
exports.update = update;
const updateOnce = (cnpj, id) => {
    let hasVaccinated = false;
    //verificando se o petshop existe antes de seguir
    if (!(0, petshopService_1.isCnpjExist)(cnpj)) {
        return false;
    }
    const petshopToGet = (0, petshopRepository_1.findByCnpj)(cnpj);
    petshopToGet.getPets().forEach((pet) => {
        if (pet.getId() == id) {
            pet.setVaccinated(true);
            hasVaccinated = true;
        }
    });
    if (hasVaccinated) {
        (0, petshopRepository_1.save)(petshopToGet);
        return true;
    }
    return false;
};
exports.updateOnce = updateOnce;
const deleteService = (cnpj, id) => {
    let deleted = false;
    //verificando se o petshop existe antes de seguir
    if (!(0, petshopService_1.isCnpjExist)(cnpj)) {
        return false;
    }
    const petshopToGet = (0, petshopRepository_1.findByCnpj)(cnpj);
    const newPetshop = petshopToGet.getPets().filter((pet) => pet.getId() != id);
    (0, petshopRepository_1.save)(newPetshop);
    return true;
};
exports.deleteService = deleteService;
