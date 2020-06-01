import React, {Component} from "react";
import "./PersonnelList.css";
import { observer, inject } from "mobx-react";

import { Table } from "antd";
import "antd/es/table/style"

const columns = [
    {
      title: '员工号',
      dataIndex: 'person',
    },
    {
        title: '变动类型',
        dataIndex : 'change'
    },
    {
        title: '描述',
        dataIndex: 'description'
    }
]

@observer
@inject("departmentStore")
class PersonnelList extends Component{
    constructor(props){
        super(props)
        this.props.departmentStore.getAllPnal();
        this.data = [];
    }

    @observer
    render(){
        this.data = [];
        this.props.departmentStore.pnalList.map((item,index)=>{
            const newItem = {
                ...item,
                key:index
            }
            this.data.unshift(newItem)
        })
        return <Table className="PersonnelList" columns={columns} dataSource={this.data}/>
    }
    
}

export default PersonnelList;