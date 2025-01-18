import { v4 as idGenerator } from "uuid";

export class Pet {

    private id: string;
    private name: string;
    private type: string;
    private description: string;
    private vaccinated?: boolean;
    private dedalineVaccination?: Date;
    private createdAtt: Date;

    constructor(
        name: string,
        type: string,
        description: string,
        dedalineVaccination: string,
    ) {
        this.id = idGenerator();
        this.name = name;
        this.type = type;
        this.description = description;
        this.vaccinated = false
        this.dedalineVaccination = new Date(dedalineVaccination);
        this.createdAtt =  new Date();
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string) {
        this.name = value;
    }

    public geType(): string {
        return this.type;
    }

    public sesType(value: string) {
        this.type = value;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(value: string) {
        this.description = value;
    }

    public getVaccinated(): boolean | undefined {
        return this.vaccinated;
    }

    public setVaccinated(value: boolean | undefined) {
        this.vaccinated = value;
    }

    public getDedalineVaccination(): Date | undefined {
        return this.dedalineVaccination;
    }

    public setDedalineVaccination(value: Date | undefined) {
        this.dedalineVaccination = value;
    }

    public getCreatedAtt(): Date {
        return this.createdAtt;
    }

    public setCreatedAtt(value: Date) {
        this.createdAtt = value;
    }
}