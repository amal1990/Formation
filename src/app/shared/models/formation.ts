export class Formation {
    id?: number;
    title: string;
    description?: string;

    mapToFormation(model) {

        this.id = model.id;
        this.title = model.title;
        this.description = model.description;
        return this;
    }

}
