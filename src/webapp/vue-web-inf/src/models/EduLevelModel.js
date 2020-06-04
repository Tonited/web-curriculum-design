

class EduLevelModel {
    id;
    description;

    constructor(id, description){
        this.id = id;
        this.description = description;
    }

    static fromJS(object){
        return new EduLevelModel(
            object.id,
            object.description
        )
    }
}

export default EduLevelModel;