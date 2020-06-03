
class LoginModel{
    id;
    account;
    password;

    constructor(id,account,password){
        this.id = id;
        this.account = account;
        this.password = password;
    }

    static fromJS(object){
        return new LoginModel(
            object.id,
            object.account,
            object.password
        )
    }
}
export default LoginModel;