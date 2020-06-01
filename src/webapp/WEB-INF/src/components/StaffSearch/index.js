import React, {Component} from "react";
import "./StaffSearch.css"
import { Link } from "react-router-dom";

import { Table, Button, Select, Input } from 'antd';
import "antd/es/table/style"
import "antd/es/button/style"
import "antd/es/input/style"
import "antd/es/select/style"
import { inject, observer } from "mobx-react";
const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;



@inject("loginStore")
@inject("staffStore")
@inject("departmentStore")
@observer
class StaffSearch extends Component{

  columns = [
    {
      title: '员工号',
      dataIndex: 'id',
    },
    {
      title:'密码',
      dataIndex: 'passwd'
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '生日',
      dataIndex: 'birthday',
    },
    {
        title: '部门',
        dataIndex: 'department'
    },
    {
        title: '职务',
        dataIndex: 'job'
    },
    {
        title: '教育水平',
        dataIndex: 'eduLevel'
    },
    {
        title: '专业技能',
        dataIndex: 'spciality'
    },
    {
        title: '住址',
        dataIndex: 'address',
    },
    {
        title: '电话',
        dataIndex: 'tel'
    },
    {
        title: '当前状态',
        dataIndex: 'state'
    },
    {
        title: '备注',
        dataIndex: 'remark'
    },
    {
      title: '操作',
      dataIndex: 'todo',
      render:(text,record)=> {
        if(record.id === '0617') return <div style={{color:"red"}}>不可修改</div>
        else return <div onClick={()=>{
          const newStaff = record;
          const departmentStore = this.props.departmentStore;
          departmentStore.dep.map(item=>{
            if(newStaff.department === item.name) newStaff.department = item.id
          })
          // 整理职务
          departmentStore.job.map(item=>{
              if(newStaff.job === item.description) newStaff.job = item.code
          })
          // 整理教育水平
          departmentStore.edu.map(item=>{
              if(newStaff.eduLevel === item.description) newStaff.eduLevel = item.code
          })
          this.props.staffStore.willChangeStaff = newStaff;
        }}><Link to="/staff/updata" >修改</Link></div>
      }
    }
  ];

  constructor(props){
    super(props);
    this.staffNameSearchText = "";
    this.dep = -1;
    this.job = -1;


    this.dataSource = []
    this.props.staffStore.getStaffList(null,null,null,this.props.departmentStore);
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  state = {
    selectedRowKeys: [], 
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  

  render() {

    this.dataSource=[]
    this.props.staffStore.staffList.map((item,index)=>{
      const newItem = {
        ...item,
        key: item.id
      }
      this.dataSource.unshift(newItem);})

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      getCheckboxProps: record => ({
        disabled: ((record.name === this.props.loginStore.staff.name) || (record.id === '0617')), // Column configuration not to be checked
        name: record.name,
      }),
      selections: [
        {
          key: 'all-data',
          text: 'Select All Data',
          onSelect: () => {
            const arr=[];
            this.dataSource.map(item=>{
              if(item.id !== '0617' && item.id!==this.props.loginStore.staff.id)
              arr.unshift(item.key)
            });
            this.setState({
              selectedRowKeys: arr, // 0...45
            });
          },
        },
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <div>
        <div className="ConditionArea">
          <div className="searchButtons">
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
            <InputGroup compact className='textSel Sel'>
              <Search placeholder="员工姓名" onSearch={this.handleSearch} onChange={e => this.staffNameSearchText = e.target.value } enterButton />
            </InputGroup>
          </div>
          <Button className="deleteButton" type="danger" onClick={this.handleDelete}>删除</Button>
        </div>
        <Table className="SearchArea" rowSelection={rowSelection} columns={this.columns} dataSource={this.dataSource} />;
      </div>
    )
  }

  handleSearch(){
    this.props.staffStore.getStaffList(this.staffNameSearchText,this.dep,this.job,this.props.departmentStore);
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

  handleDelete(){
    if(this.state.selectedRowKeys.length !== 0){
      this.state.selectedRowKeys.map(item=>{
        this.props.staffStore.deleteStaff(item)
        let willDeleteID =  item
        let indexGet;
        this.props.staffStore.staffList.map((items,indexs)=>{
          if(items.id ===  willDeleteID) indexGet = indexs;
        })
        this.props.staffStore.staffList.splice(indexGet, 1);
      })
      this.setState({ selectedRowKeys: [] });
    }
  }
}

export default StaffSearch;