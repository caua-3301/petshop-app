import { getDatabase } from "../database/database";
import { Petshop } from "../models/entity/Petshop";

const database:Array<Petshop> = getDatabase();

const save = (petshop:any): void => {
    database.push(petshop);
}

const findByCnpj = (cnpj: any): any => {

    let result = null;

    database.forEach(petshop => {
        if (petshop.getCnpj() == cnpj) {
            result = petshop;
        }
    })

    return result;
}

export { save, findByCnpj }