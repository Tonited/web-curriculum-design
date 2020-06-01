import React, {Component} from "react";
import {BrowserRouter, Route } from "react-router-dom";
import SideBar from "../Sidebar";
import Login from "../Login";
import StaffSearch from '../StaffSearch'
import PersonnelList from "../PersonnelList";
import AddStaff from "../AddStaff"
import UpdataStaff from "../UpdataStaff"

class App extends Component{
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/login" component={Login} />
                    <Route path="/staff" component={SideBar}/>
                    <Route exact path="/staff/search" component={StaffSearch} />
                    <Route exact path="/staff/personnel" component={PersonnelList} />
                    <Route exact path="/staff/add" component={AddStaff} />
                    <Route exact path="/staff/updata" component={UpdataStaff}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;