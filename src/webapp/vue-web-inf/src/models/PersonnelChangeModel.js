class PersonnelChangeModel{
    id;
    description;

    constructor(id, description){
        this.id = id;
        this.description = description;
    }

    static fromJS(object){
        return new PersonnelChangeModel(
            object.id,
            object.description
        )
    }
}

export default PersonnelChangeModel;