import { Request, response, Response } from "express";
import { findAll as findAllService, save as saveService, update as updateService, updateOnce as updateOnceService, deleteService } from "../service/petService";
import { PetDAO } from "../models/dao/PetDAO";
import { Pet } from "../models/entity/Pet";

const status = (req: Request, res: Response):void => {
    res.send("200 OK").status(200);
}

const findAll = (req: Request, res: Response):void => {
    const { cnpj } = req.query;

    const pets:Array<Pet> | null = findAllService(res, cnpj);

    if (pets != null) {
        res.status(200).send(pets);
    }
}

const save = (req:Request, res: Response):void => {
    //dados
    const content = req.body;
    const cnpj = req.headers.cnpj;

    const petDAO:PetDAO = new PetDAO(content.name, content.type, content.description, content.deadline_vaccination);

    const pet:Pet | null = saveService(res, petDAO, cnpj);

    if (pet != null) {
        res.status(201).send(pet);
    }
}

const update = (req:Request, res: Response):void => {

    const { cnpj } = req.headers;
    const { id } = req.query;

    const content = req.body;

    const petDAO:PetDAO = new PetDAO(content.name, content.type, content.description, content.deadline_vaccination);

    const pet = updateService(res, petDAO, cnpj, id);

    if (pet == null) {
        res.status(404).send({
            message: "petshop ou pet não encontrado"
        })
    } else {
        res.status(200).send(pet);
    }
}

const updateOnce = (req:Request, res:Response):void => {

    const { cnpj } = req.headers;
    const { id } = req.params;

    const result:boolean = updateOnceService(cnpj, id);

    if (result) {
        res.status(200).send("200 OK");
    } else {
        res.status(404).send({
            message: "peshop ou pet não encontrados"
        })
    }
}

const deletePet = (req:Request, res:Response):void => {

    const { cnpj } = req.headers;
    const { id } = req.params;

    const result:boolean = deleteService(cnpj, id);

    if (result) {
        res.status(200).send("200 OK");
    } else {
        res.status(404).send({
            message: "peshop ou pet não encontrados"
        })
    }
}

export { status, findAll, save, update, updateOnce, deletePet }