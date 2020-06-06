class JobModel {
    id;
    description;

    constructor(id, description){
        this.id = id;
        this.description = description;
    }

    static fromJS(object){
        return new JobModel(
            object.id,
            object.description
        )
    }
}

export default JobModel;