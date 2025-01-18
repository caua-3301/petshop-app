"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetDAO = void 0;
class PetDAO {
    constructor(name, type, description, deadline_vaccination) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.deadline_vaccination = deadline_vaccination;
    }
}
exports.PetDAO = PetDAO;
