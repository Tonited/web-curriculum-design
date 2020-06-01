import { observable } from "mobx";

class PersonnelChangeModel{
    store;
    code;
    @observable description;

    constructor(store, code, description){
        this.store = store;
        this.code = code;
        this.description = description;
    }

    static fromJS(store, object){
        return new PersonnelChangeModel(
            store, 
            object.code,
            object.description
        )
    }
}

export default PersonnelChangeModel;