import { Petshop } from "../models/entity/Petshop";
import { cnpj as cnpjValidator } from "cpf-cnpj-validator";
import { save as saveRepository, findByCnpj } from "../repository/petshopRepository";
import { PetShopDAO } from "../models/dao/PetshopDAO";
import { Response } from "express";

const isCnpjExist = (cnpj: string): boolean => {
    const result = findByCnpj(cnpj);

    return result != null;
}

const save = (res:Response, petshop: PetShopDAO) => {

    const { name, cnpj } = petshop;

    //verificar formato do cnpj
    if (!cnpjValidator.isValid(cnpj)) {
        res.status(400).send({
            message: "o cnpj não está em um formato válido"
        })
        return null;
    }

    //verificar se o cnpj informado já foi cadastrado
    if (isCnpjExist(cnpj)) {
        res.status(400).send({
            message: "o cnpj não já está cadastrado"
        })
        return null;
    }

    const petshopModel: Petshop = new Petshop(name, cnpj);

    saveRepository(petshopModel);

    return petshopModel;
}

export { save, isCnpjExist }