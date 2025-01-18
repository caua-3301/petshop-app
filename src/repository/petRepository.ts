import { Pet } from "../models/entity/Pet";
import { Petshop } from "../models/entity/Petshop";
import { findByCnpj } from "./petshopRepository";

//buscando todos os animais de determinado petshop
const findAll = (cnpj: string) => {
    const petshopReference:Petshop = findByCnpj(cnpj);

    return petshopReference == null ? null : petshopReference.getPets();
}

const save = (pet:Pet, cnpj:any) => {

    const petshop:Petshop | null = findByCnpj(cnpj);

    if (petshop != null) {
        petshop.getPets().push(pet)
        return pet;
    }

    return null;
}

export { findAll, save };