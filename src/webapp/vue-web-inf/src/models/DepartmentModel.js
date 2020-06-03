
class DepartmentModel {
    id;
    name;
    manager;
    intro;

    constructor(id, name, manager, intro){
        this.id = id;
        this.name = name;
        this.manager = manager;
        this.intro = intro;
    }

    static fromJS(object){
        return new DepartmentModel(
            object.id,
            object.name,
            object.manager,
            object.intro
        )
    }
}

export default DepartmentModel;