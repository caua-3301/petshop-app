import { Petshop } from "../models/entity/Petshop";

const database:Array<Petshop> = [];

export const getDatabase = ():Array<Petshop> => {
    return database;
}