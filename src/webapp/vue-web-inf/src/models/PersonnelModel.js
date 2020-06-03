
class PersonnelModel {
    store;
    id;
    person;
    change;
    description;

    constructor(id, person, change, description){
        this.id = id;
        this.person = person;
        this.change = change;
        this.description = description;
    }

    static fromJS(sobject){
        return new PersonnelModel(
            object.id,
            object.person,
            object.change,
            object.description
        )
    }
}

export default PersonnelModel;