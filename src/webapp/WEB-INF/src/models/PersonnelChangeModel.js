import { observable } from "mobx";

class PersonnelChangeModel{
    store;
    id;
    @observable description;

    constructor(store, id, description){
        this.store = store;
        this.id = id;
        this.description = description;
    }

    static fromJS(store, object){
        return new PersonnelChangeModel(
            store, 
            object.id,
            object.description
        )
    }
}

export default PersonnelChangeModel;