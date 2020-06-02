

class EduLevelModel {
    code;
    description;

    constructor(code, description){
        this.code = code;
        this.description = description;
    }

    static fromJS(object){
        return new EduLevelModel(
            object.code,
            object.description
        )
    }
}

export default EduLevelModel;