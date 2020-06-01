import { observable } from "mobx";

class JobModel {
    store;
    @observable code;
    @observable description;

    constructor(store, code, description){
        this.store = store;
        this.code = code;
        this.description = description;
    }

    static fromJS(store,object){
        return new JobModel(
            store,
            object.code,
            object.description
        )
    }
}

export default JobModel;