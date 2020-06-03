
class PersonnelChangeModel{
    store;
    code;
    description;

    constructor(store, code, description){
        this.store = store;
        this.code = code;
        this.description = description;
    }

    static fromJS(object){
        return new PersonnelChangeModel(
            object.code,
            object.description
        )
    }
}

export default PersonnelChangeModel;