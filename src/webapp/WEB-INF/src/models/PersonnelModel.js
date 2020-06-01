import { observable } from "mobx";

class PersonnelModel {
    store;
    id;
    @observable person;
    @observable change;
    @observable description;

    constructor(store, id, person, change, description){
        this.store = store;
        this.id = id;
        this.person = person;
        this.change = change;
        this.description = description;
    }

    static fromJS(store, object){
        return new PersonnelModel(
            store,
            object.id,
            object.person,
            object.change,
            object.description
        )
    }
}

export default PersonnelModel;