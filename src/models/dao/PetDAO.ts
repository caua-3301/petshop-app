export class PetDAO {
    name: string;
    type: string;
    description: string;
    deadline_vaccination: string;

    constructor(
        name: string,
        type: string,
        description: string,
        deadline_vaccination: string
      ) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.deadline_vaccination = deadline_vaccination;
      }

}