import React, {Component} from 'react';
import { Menu, Icon, Avatar } from 'antd';
import "antd/es/menu/style"
import "antd/es/icon/style"
import "antd/es/avatar/style"
import "./SideBar.css";
import { inject, observer} from 'mobx-react';
import { Redirect, Link } from 'react-router-dom';

@observer
@inject("loginStore")
class SideBar extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout = ()=>{
        this.props.loginStore.logout();
    }

    render() {
        if(this.props.loginStore.loginRes !== 'OK') return <Redirect to="/login" />
        else return (
            <div>
                <Menu className={"SideBar"}
                    defaultSelectedKeys={'1'}
                    inlineCollapsed={false}
                >
                    <Avatar className="head" size={64} icon="user" />
                    <span className={"staffName"}>
                        {this.props.loginStore.staff.name}
                    </span>
                    <Menu.Item key="1" className={"item"}>
                        <Link to="/staff/search">
                            <Icon type="pie-chart" />
                            <span>员工查找</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" className={"item"}>
                        <Link to="/staff/add">
                            <Icon type="desktop" />
                            <span>员工录入</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" className={"item"}>
                        <Link to="/staff/personnel">
                            <Icon type="inbox" />
                            <span>人事变动</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4" className={"item"} onClick={this.logout}>
                        <Icon type="logout" />
                        <span>登出系统</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default SideBar;