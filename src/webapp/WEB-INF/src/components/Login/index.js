import React, {Component} from "react";
import { inject, observer } from "mobx-react"
import "./Login.css";

import { Form, Icon, Input, Button} from 'antd';
import "antd/es/form/style";
import "antd/es/icon/style";
import "antd/es/input/style";
import "antd/es/button/style";
import { Redirect } from "react-router-dom";

@inject("loginStore")
@inject("departmentStore")
@observer
class NormalLoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            staffID: "",
            password: "",
        }
        this.loginStore = this.props.loginStore;
        this.props.departmentStore.getAllNeed();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              this.loginStore.login(this.state.staffID, this.state.password);
          }
        });
      };

    render(){
        const { getFieldDecorator } = this.props.form;
        if(this.props.loginStore.loginRes === 'OK') return <Redirect to="/staff/search" />
        else return(

            <div className="back">
                <Form onSubmit={this.handleSubmit} className="Login">
                    <div className="title">人事管理系统</div>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your Staff ID!' }],
                    })(
                        <Input className="loginItem"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Staff ID"
                        onChange={e=>{this.setState({staffID:e.target.value})}}
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input className="loginItem"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        onChange={e=>{this.setState({password:e.target.value})}}
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="loginButton">
                                登陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


class Login extends Component{
    render(){
        return(
            <LoginForm/>
        )
    }
}
export default Login;