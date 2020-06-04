import { observable } from "mobx";

class EduLevelModel {
    store;
    @observable id;
    @observable description;

    constructor(store, id, description){
        this.store = store;
        this.id = id;
        this.description = description;
    }

    static fromJS(store, object){
        return new EduLevelModel(
            store,
            object.id,
            object.description
        )
    }
}

export default EduLevelModel;