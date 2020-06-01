import { observable } from "mobx";

class DepartmentModel {
    store;
    id;
    @observable name;
    @observable manager;
    @observable intro;

    constructor(store, id, name, manager, intro){
        this.store = store;
        this.id = id;
        this.name = name;
        this.manager = manager;
        this.intro = intro;
    }

    static fromJS(store,object){
        return new DepartmentModel(
            store,
            object.id,
            object.name,
            object.manager,
            object.intro
        )
    }
}

export default DepartmentModel;