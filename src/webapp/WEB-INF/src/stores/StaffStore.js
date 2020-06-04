import { observable, action } from "mobx";
import PersonModel from "../models/PersonModel";
import { inject, observer } from "mobx-react";

// @inject("departmentStore")
// @observer
class StaffStore{
    
    staffApi;
    @observable staffList = [];
    @observable warningText = null;
    @observable upwarningText = null;
    @observable reTag = false;
    @observable reUpTag = false;
    @observable willChangeStaff = {
            id:"0",
            passwd:"123456",
            name:"",
            department:-1,
            job:-1,
            eduLevel:-1,
            sex:"",
            birthday:"",
            spciality:"",
            address:"",
            tel:"",
            email:"",
            state:"",
            remark:""
    };

    constructor(staffApi){
        this.staffApi = staffApi;
    }

    delDepInfo(departmentStore, staff){
        const newStaff = staff;

        // 整理部门
        departmentStore.dep.map(item=>{
            if(newStaff.department === item.id) newStaff.department = item.name
        })
        // 整理职务
        departmentStore.job.map(item=>{
            if(newStaff.job === item.id) newStaff.job = item.description
        })
        // 整理教育水平
        departmentStore.edu.map(item=>{
            if(newStaff.eduLevel === item.id) newStaff.eduLevel = item.description
        })
        return newStaff;
    }

    @action
    getStaffList(staffName, depID, jobID, departmentStore){
        const condition = {
            staffName: staffName,
            departmentID : depID,
            jobID : jobID
        }
        this.staffApi.getStaffList(condition).then(
            action(res=>{
                if(!res.error){
                    this.staffList=[];
                    res.map(item=>{
                        const newStaff = PersonModel.fromJS(this,item);

                        // 整理部门
                        departmentStore.dep.map(item=>{
                            if(newStaff.department === item.id) newStaff.department = item.name
                        })
                        // 整理职务
                        departmentStore.job.map(item=>{
                            if(newStaff.job === item.id) newStaff.job = item.description
                        })
                        // 整理教育水平
                        departmentStore.edu.map(item=>{
                            if(newStaff.eduLevel === item.id) newStaff.eduLevel = item.description
                        })
                        
                        this.staffList.unshift(newStaff);
                    })
                }else console.log(res.error)
            })
        )
    }

    @action
    deleteStaff(staffID){
        this.staffApi.deleteStaff(staffID).then(
            action(res=>{
                if(!res.error){
                    this.staffList.map((item,index)=>{
                        if(item.id === staffID)  this.staffList.splice(index,1);
                    })
                }else console.log(res.error)
            })
        )
    }

    @action
    addStaff(staffInfo){
        this.staffApi.addStaff(staffInfo).then(
            action(res=>{
                console.log(res);
                if(res === true){
                    this.reTag = true;
                    window.alert("添加员工成功");
                    setTimeout(()=>{this.reTag = false},600)
                }
                else this.warningText = '添加员工失败'
            })
        )
    }

    @action
    updataStaff(staffInfo){
        this.staffApi.updataStaff(staffInfo).then(
            action(res=>{
                console.log(res);
                if(res === true){
                    this.reUpTag = true;
                    window.alert("修改员工成功");
                    setTimeout(()=>{this.reUpTag = false},500)
                }
                else this.warningText = '修改员工失败'
            })
        )
    }

}

export default StaffStore;