import { Request, Response } from "express";
import { save as saveService } from "../service/petshopService";
import { PetShopDAO } from "../models/dao/PetshopDAO";
import { Petshop } from "../models/entity/Petshop";

export const status = (req: Request, res: Response):void => {
    res.send("200 OK").status(200);
}

export const save = (req: Request, res: Response):void => {
    //consultar a camada de service que tem acesso ao banco
    const petshopDAO:PetShopDAO = new PetShopDAO(req.body.name, req.body.cnpj);

    const result = saveService(res, petshopDAO);

    if (result != null) {
        res.status(201).send(result);
    }
}
