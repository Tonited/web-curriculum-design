import { observable } from "mobx";

class PersonModel {
    store;
    @observable id;
    @observable passwd;
    @observable name;
    @observable sex;
    @observable birthday;
    @observable department;
    @observable job;
    @observable eduLevel;
    @observable spciality;
    @observable address;
    @observable tel;
    @observable email;
    @observable state;
    @observable remark;

    constructor(store, id, passwd, name, sex, birthday, department, job, eduLevel, spciality, address, tel, email, state, remark){
        this.store = store;
        this.id = id;
        this.passwd = passwd;
        this.name = name;
        this.sex = sex;
        this.birthday = birthday;
        this.department = department;
        this.job = job;
        this.eduLevel = eduLevel;
        this.spciality = spciality;
        this.address = address;
        this.tel = tel;
        this.email = email;
        this.state = state;
        this.remark = remark;
    }

    static fromJS(store, object){
        return new PersonModel(
            store,
            object.id,
            object.passwd,
            object.name,
            object.sex,
            object.birthday,
            object.department,
            object.job,
            object.eduLevel,
            object.spciality,
            object.address,
            object.tel,
            object.email,
            object.state,
            object.remark
        )
    }

}

export default PersonModel;