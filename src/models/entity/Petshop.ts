import { v4 as idGenerator } from "uuid";
import { Pet } from "./Pet";

export class Petshop {

    private id: string;
    private name: string;
    private cnpj: string;
    private pets: Pet[];

    constructor(name: string, cnpj: string) {
        this.id = idGenerator();
        this.name = name;
        this.cnpj = cnpj;
        this.pets = []
    }

    public getId(): string {
        return this.id;
    }

    public setId(value: string) {
        this.id = value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public setCnpj(value: string) {
        this.cnpj = value;
    }

    public getPets(): Pet[] {
        return this.pets;
    }

    public setPets(value: Pet[]) {
        this.pets = value;
    }

}