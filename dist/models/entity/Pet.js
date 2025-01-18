"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const uuid_1 = require("uuid");
class Pet {
    constructor(name, type, description, dedalineVaccination) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.type = type;
        this.description = description;
        this.vaccinated = false;
        this.dedalineVaccination = new Date(dedalineVaccination);
        this.createdAtt = new Date();
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    geType() {
        return this.type;
    }
    sesType(value) {
        this.type = value;
    }
    getDescription() {
        return this.description;
    }
    setDescription(value) {
        this.description = value;
    }
    getVaccinated() {
        return this.vaccinated;
    }
    setVaccinated(value) {
        this.vaccinated = value;
    }
    getDedalineVaccination() {
        return this.dedalineVaccination;
    }
    setDedalineVaccination(value) {
        this.dedalineVaccination = value;
    }
    getCreatedAtt() {
        return this.createdAtt;
    }
    setCreatedAtt(value) {
        this.createdAtt = value;
    }
}
exports.Pet = Pet;
