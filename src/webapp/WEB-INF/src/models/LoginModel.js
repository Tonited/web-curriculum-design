import {observable } from "mobx";

class LoginModel{
    store;
    id;
    @observable account;
    @observable password;

    constructor(store,id,account,password){
        this.store = store;
        this.id = id;
        this.account = account;
        this.password = password;
    }

    static fromJS(store,object){
        return new LoginModel(
            store,
            object.id,
            object.account,
            object.password
        )
    }
}
export default LoginModel;