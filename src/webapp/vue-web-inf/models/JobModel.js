import { observable } from "mobx";

class JobModel {
    code;
    description;

    constructor(code, description){
        this.code = code;
        this.description = description;
    }

    static fromJS(object){
        return new JobModel(
            object.code,
            object.description
        )
    }
}

export default JobModel;