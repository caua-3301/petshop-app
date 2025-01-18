import { Response } from "express";
import { PetDAO } from "../models/dao/PetDAO";
import { Pet } from "../models/entity/Pet";
import { findAll as findAllRepository, save as saveRespository } from "../repository/petRepository";
import { isCnpjExist } from "./petshopService";
import { Petshop } from "../models/entity/Petshop";
import { findByCnpj, save as savePetshop } from "../repository/petshopRepository";

const findAll = (res:Response, cnpj: any):Array<Pet> | null => {

    const response:Array<Pet> | null = findAllRepository(cnpj);

    if (response == null) {
        res.status(404).send({
            message: "o cnpj não está cadastrado"
        })

        return null;
    }

    return response;
}

const save = (res:Response, petDAO: PetDAO, cnpj: any):Pet | null => {

    const pet:Pet = new Pet(
        petDAO.name,
        petDAO.type,
        petDAO.description,
        petDAO.deadline_vaccination
    )

    //verificado se o cnpj está cadastrado
    if (!isCnpjExist(cnpj)) {
        res.status(404).send({
            message: "o usuário (petshop) informado não está cadastrado"
        })

        return null;
    }

    const result = saveRespository(pet, cnpj);

    return result;
}

const update = (res: Response, petDAO: PetDAO, cnpj:any, id:any) => {

    //verificado se o cnpj está cadastrado
    if (!isCnpjExist(cnpj)) {
        return null;
    }

    const petShop:Petshop = findByCnpj(cnpj);

    let petModified = null;

    petShop?.getPets().forEach(pet => {
        if (pet.getId() == id) {
            pet.setName(petDAO.name);
            pet.setDescription(petDAO.description);
            pet.sesType(petDAO.type);
            pet.setDedalineVaccination(new Date(petDAO.deadline_vaccination));

            petModified = pet;
        }
    })

    if (petModified == null) {
        return null;
    }

    savePetshop(petShop);

    return petModified;
}

const updateOnce = (cnpj:any, id:any): boolean => {

    let hasVaccinated = false;
    
    //verificando se o petshop existe antes de seguir
    if (!isCnpjExist(cnpj)) {
        return false;
    }

    const petshopToGet:Petshop = findByCnpj(cnpj);

    petshopToGet.getPets().forEach((pet:Pet) => {
        if (pet.getId() == id) {
            pet.setVaccinated(true);
            hasVaccinated = true;
        }
    })

    if (hasVaccinated) {
        savePetshop(petshopToGet);
        return true;
    }

    return false;

}

const deleteService = (cnpj:any, id:any) => {
    let deleted = false;
    
    //verificando se o petshop existe antes de seguir
    if (!isCnpjExist(cnpj)) {
        return false;
    }

    const petshopToGet:Petshop = findByCnpj(cnpj);

    const pets = petshopToGet.getPets();

    let newPetshop;

    if (pets.length > 1) {
        newPetshop = petshopToGet.getPets().filter((pet:Pet) => pet.getId() != id);
    }

    savePetshop(newPetshop);
    
    return true;
    
}

export { findAll, save, update, updateOnce, deleteService }