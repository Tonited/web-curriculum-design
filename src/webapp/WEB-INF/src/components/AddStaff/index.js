import React, {Component} from "react";
import "./AddStaff.css";
import { inject, observer } from "mobx-react";

import { Button, Select, Input } from 'antd';
import "antd/es/table/style"
import "antd/es/button/style"
import "antd/es/input/style"
import "antd/es/select/style"
import { Redirect } from "react-router-dom";
const InputGroup = Input.Group;
const { Option } = Select;

@inject("staffStore")
@inject("departmentStore")
@observer
class AddStaff extends Component{
    constructor(props){
        super(props)
        this.handleComit = this.handleComit.bind(this);
    }


    staffName="";
    dep=-1;
    job=-1;
    edu=-1;
    sex="";
    birthday="";
    spciality="";
    address="";
    tel="";
    email="";
    state="";
    remark="";

    render(){
        if(this.props.staffStore.reTag === true) return <Redirect to="/staff/search" />
        else return(
            <div className="AddStaff">
                <InputGroup compact className='depSel Sel'>
                    <Select style={{ width: '90%'}} defaultValue={-1} onChange={e => this.dep = e}>
                        {this.returnDepartOption()}
                    </Select>
                </InputGroup>
                <InputGroup compact className='jobSel Sel'>
                    <Select style={{ width: '90%'}} defaultValue={-1} onChange={e => this.job = e}>
                        {this.returnJobOption()}
                    </Select>
                </InputGroup>
                <InputGroup compact className='eduSel Sel'>
                    <Select style={{ width: '90%'}} defaultValue={-1} onChange={e => this.edu = e}>
                        {this.returnEduOption()}
                    </Select>
                </InputGroup>
                <InputGroup compact className='textSel Sel'>
                    <Input placeholder="员工姓名" style={{ width: '90%'}} onChange={e => this.staffName = e.target.value } />
                </InputGroup>
                <InputGroup compact className='sexSel Sel'>
                    <Input placeholder="员工性别" style={{ width: '90%'}} onChange={e => this.sex = e.target.value } />
                </InputGroup>
                <InputGroup compact className='birthdaySel Sel'>
                    <Input placeholder="员工生日" style={{ width: '90%'}} onChange={e => this.birthday = e.target.value } />
                </InputGroup>
                <InputGroup compact className='spcSel Sel'>
                    <Input placeholder="专业技能" style={{ width: '90%'}} onChange={e => this.spciality = e.target.value } />
                </InputGroup>
                <InputGroup compact className='addSel Sel'>
                    <Input placeholder="家庭住址" style={{ width: '90%'}} onChange={e => this.address = e.target.value } />
                </InputGroup>
                <InputGroup compact className='tesSel Sel'>
                    <Input placeholder="常用电话" style={{ width: '90%'}} onChange={e => this.tel = e.target.value } />
                </InputGroup>
                <InputGroup compact className='emailSel Sel'>
                    <Input placeholder="常用邮箱" style={{ width: '90%'}} onChange={e => this.email = e.target.value } />
                </InputGroup>
                <InputGroup compact className='stateSel Sel'>
                    <Input placeholder="职员状态" style={{ width: '90%'}} onChange={e => this.state = e.target.value } />
                </InputGroup>
                <InputGroup compact className='remarkSel Sel'>
                    <Input placeholder="备注" style={{ width: '90%'}} onChange={e => this.remark = e.target.value } />
                </InputGroup>
                <div className="commitArea">
                    <div className="warningText">{this.props.staffStore.warningText === null ? null : this.props.staffStore.warningText}</div>
                    <Button onClick={this.handleComit}>添加员工</Button>
                </div>
            </div>
        )
    }

    handleComit(){
        this.props.staffStore.warningText = null;
        const staff = {
            id:"0",
            passwd:"123456",
            name:this.staffName,
            department:this.dep,
            job:this.job,
            eduLevel:this.edu,
            sex:this.sex,
            birthday:this.birthday,
            spciality:this.spciality,
            address:this.address,
            tel:this.tel,
            email:this.email,
            state:this.state,
            remark:this.remark
        }

        if(staff.job===-1 || staff.department===-1 || staff.eduLevel===-1 || staff.name==="" || staff.name==null){
            this.props.staffStore.warningText = "姓名、部门、职务、教育程度 为必填项"
        }
        else this.props.staffStore.addStaff(staff);
    }


    returnDepartOption(){
        const depOption = [];
        this.props.departmentStore.dep.map(item=>{
          const newItem = <Option value={item.id}>{item.name}</Option>
          depOption.unshift(newItem)
        })
        return depOption;
      }
    
    returnJobOption(){
        const jobOption = [];
        this.props.departmentStore.job.map(item=>{
            const newItem = <Option value={item.code}>{item.description}</Option>
            jobOption.unshift(newItem)
        })
        return jobOption;
    }

    returnEduOption(){
        const eduOption = [];
        this.props.departmentStore.edu.map(item=>{
            const newItem = <Option value={item.code}>{item.description}</Option>
            eduOption.unshift(newItem)
        })
        return eduOption;
    }
}

export default AddStaff;