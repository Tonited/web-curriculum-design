import loginApi from "../api/loginApi";
import staffApi from "../api/staffApi";
import departmentApi from '../api/departmentApi'

import LoginStore from './LoginStore';
import StaffStore from './StaffStore';
import DepartmentStore from './DepartmentStore';


const loginStore = new LoginStore(loginApi,staffApi);
const staffStore = new StaffStore(staffApi);
const departmentStore = new DepartmentStore(departmentApi);

const stores = {
    loginStore,
    staffStore,
    departmentStore
};
export default stores;