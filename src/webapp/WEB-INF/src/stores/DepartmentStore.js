import { observable, action } from "mobx";
import DepartmentModel from "../models/DepartmentModel";
import JobModel from "../models/JobModel.js";
import PersonnelChangeModel from "../models/PersonnelChangeModel";
import EduLevelModel from "../models/EduLevelModel";
import PersonnelModel from "../models/PersonnelModel";

class DepartmentStore{
    
    departmentApi;

    @observable pnalList = [];

    @observable dep=[];
    @observable job=[];
    @observable edu=[];
    @observable pnalType=[];

    constructor(departmentApi){
        this.departmentApi = departmentApi;
    }

    @action
    getAllNeed(){
        this.departmentApi.getAllEduLv().then(
            action(res=>{
                console.log(res)
                res.map(item=>{
                    const newItem = EduLevelModel.fromJS(this, item);
                    this.edu.unshift(newItem);
                    return 0;
                })
            }
        ));
        this.departmentApi.getAllJob().then(
            action(res=>{
                res.map(item=>{
                    const newItem = JobModel.fromJS(this, item);
                    this.job.unshift(newItem);
                    return 0;
                })
            }
        ));
        this.departmentApi.getAllPersonnelType().then(
            action(res=>{
                res.map(item=>{
                    const newItem = PersonnelChangeModel.fromJS(this, item);
                    this.pnalType.unshift(newItem);
                    return 0;
                })
            }
        ));
        this.departmentApi.getAllDepartment().then(
            action(res=>{
                res.map(item=>{
                    const newItem = DepartmentModel.fromJS(this, item);
                    this.dep.unshift(newItem);
                    return 0;
                })
            }
        ));
        
    }

    @action
    getAllPnal(){
        this.departmentApi.getPersonnelList().then(
            action(res=>{
                this.pnalList = [];
                res.map(item => {
                    const newItem = PersonnelModel.fromJS(this,item);
                    this.pnalType.map(items=>{
                        if(newItem.change === items.id){
                            newItem.change = items.description
                            this.pnalList.unshift(newItem);
                        }
                    })
                    return 0;
                })
            })
        )
        console.log(this.pnalList)
    }
}

export default DepartmentStore;