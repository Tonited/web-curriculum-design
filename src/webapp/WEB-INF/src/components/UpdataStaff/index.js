import React, {Component} from "react";
import "../AddStaff/AddStaff.css";
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
class UpdataStaff extends Component{
    constructor(props){
        super(props)
        this.handleComit = this.handleComit.bind(this);
    }

    updateText = null;

    render(){
        if(this.props.staffStore.reUpTag === true) return <Redirect to="/staff/search" />
        else return(
            <div className="AddStaff">
                <InputGroup compact className='depSel Sel'>
                    <Select style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.department} onChange={e => this.props.staffStore.willChangeStaff.department = e}>
                        {this.returnDepartOption()}
                    </Select>
                </InputGroup>
                <InputGroup compact className='jobSel Sel'>
                    <Select style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.job} onChange={e => this.props.staffStore.willChangeStaff.job = e}>
                        {this.returnJobOption()}
                    </Select>
                </InputGroup>
                <InputGroup compact className='eduSel Sel'>
                    <Select style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.eduLevel} onChange={e => this.props.staffStore.willChangeStaff.eduLevel = e}>
                        {this.returnEduOption()}
                    </Select>
                </InputGroup>
                <InputGroup compact className='textSel Sel'>
                    <Input placeholder="员工姓名" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.name} onChange={e => this.props.staffStore.willChangeStaff.name = e.target.value } />
                </InputGroup>
                <InputGroup compact className='textSel Sel'>
                    <Input placeholder="员工密码" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.passwd} onChange={e => this.props.staffStore.willChangeStaff.passwd = e.target.value } />
                </InputGroup>
                <InputGroup compact className='sexSel Sel'>
                    <Input placeholder="员工性别" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.sex} onChange={e => this.props.staffStore.willChangeStaff.sex = e.target.value } />
                </InputGroup>
                <InputGroup compact className='birthdaySel Sel'>
                    <Input placeholder="员工生日" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.birthday} onChange={e => this.props.staffStore.willChangeStaff.birthday = e.target.value } />
                </InputGroup>
                <InputGroup compact className='spcSel Sel'>
                    <Input placeholder="专业技能" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.spciality} onChange={e => this.props.staffStore.willChangeStaff.spciality = e.target.value } />
                </InputGroup>
                <InputGroup compact className='addSel Sel'>
                    <Input placeholder="家庭住址" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.address} onChange={e => this.props.staffStore.willChangeStaff.address = e.target.value } />
                </InputGroup>
                <InputGroup compact className='tesSel Sel'>
                    <Input placeholder="常用电话" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.tel} onChange={e => this.props.staffStore.willChangeStaff.tel = e.target.value } />
                </InputGroup>
                <InputGroup compact className='emailSel Sel'>
                    <Input placeholder="常用邮箱" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.email} onChange={e => this.props.staffStore.willChangeStaff.email = e.target.value } />
                </InputGroup>
                <InputGroup compact className='stateSel Sel'>
                    <Input placeholder="职员状态" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.state} onChange={e => this.props.staffStore.willChangeStaff.state = e.target.value } />
                </InputGroup>
                <InputGroup compact className='remarkSel Sel'>
                    <Input placeholder="备注" style={{ width: '90%'}} defaultValue={this.props.staffStore.willChangeStaff.remark} onChange={e => this.props.staffStore.willChangeStaff.remark = e.target.value } />
                </InputGroup>
                <div className="commitArea">
                    <div className="warningText">{this.props.staffStore.upwarningText === null ? null : this.props.staffStore.upwarningText}</div>
                    <Button onClick={this.handleComit}>确认修改</Button>
                </div>
            </div>
        )
    }

    handleComit(){
        this.props.staffStore.upwarningText = null;
        const staff = {
            id:this.props.staffStore.willChangeStaff.id,
            passwd:this.props.staffStore.willChangeStaff.passwd,
            name:this.props.staffStore.willChangeStaff.name,
            department:this.props.staffStore.willChangeStaff.department,
            job:this.props.staffStore.willChangeStaff.job,
            eduLevel:this.props.staffStore.willChangeStaff.eduLevel,
            sex:this.props.staffStore.willChangeStaff.sex,
            birthday:this.props.staffStore.willChangeStaff.birthday,
            spciality:this.props.staffStore.willChangeStaff.spciality,
            address:this.props.staffStore.willChangeStaff.address,
            tel:this.props.staffStore.willChangeStaff.tel,
            email:this.props.staffStore.willChangeStaff.email,
            state:this.props.staffStore.willChangeStaff.state,
            remark:this.props.staffStore.willChangeStaff.remark
        }

        if(this.props.staffStore.willChangeStaff.job===-1 || this.props.staffStore.willChangeStaff.department===-1 || this.props.staffStore.willChangeStaff.eduLevel===-1 || this.props.staffStore.willChangeStaff.name==="" || this.props.staffStore.willChangeStaff.name==null){
            this.props.staffStore.upwarningText = "姓名、部门、职务、教育程度 为必填项"
        }
        else this.props.staffStore.updataStaff(staff);
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

export default UpdataStaff;