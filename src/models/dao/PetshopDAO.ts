export class PetShopDAO {
    name: string;
    cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    getName():string {
        return this.name;
    }

    getCnpj():string {
        return this.cnpj;
    }
}
