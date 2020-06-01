import { observable, action } from "mobx";
import PersonModel from "../models/PersonModel";


class LoginStore{
    loginApi;
    staffApi;

    @observable staff = null;
    @observable loginRes = null;

    constructor(loginApi, staffApi){
        this.loginApi = loginApi;
        this.staffApi = staffApi;
    }


    @action
    login(staffID,passwd){
        const info = {
            staffID: staffID,
            password: passwd
        }
        this.loginApi.login(info).then(
            action(res=>{
                    if(!res.error){
                        if(res.result === 'OK'){
                            this.staffApi.getStaff(staffID).then(
                                action(ress=>{
                                    if(!ress.error){
                                        const loginStaff = PersonModel.fromJS(this,ress);
                                        this.staff = loginStaff;
                                        this.loginRes = res.result;
                                    }
                                })
                            )
                        }
                        else {
                            this.loginRes = res.result;
                            window.alert(res.result);
                        }
                    }
                    else {
                        window.alert("网络异常");
                        console.log(res.error);
                    }
                }
            )
        )
    }

    @action
    logout(){
        this.staff = null;
        this.loginRes = null;
    }

    // @action downloadData(){
    //
    //     return this.api.downloadData().then(
    //         action(data=>{
    //             if(!data.error){
    //                 console.log(data);
    //
    //                 data.forEach(item=>this.administrators.push(LoginModel.fromJS(this,item)));
    //                 console.log(this.administrators);
    //                 return Promise.resolve();
    //             }
    //         })
    //     )
    // }
}
export default LoginStore;