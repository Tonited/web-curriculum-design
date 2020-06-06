
class PersonModel {
     id;
     passwd;
     name;
     sex;
     birthday;
     department;
     job;
     eduLevel;
     spciality;
     address;
     tel;
     email;
     state;
     remark;

    constructor(id, passwd, name, sex, birthday, department, job, eduLevel, spciality, address, tel, email, state, remark){
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

    static fromJS( object){
        return new PersonModel(
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