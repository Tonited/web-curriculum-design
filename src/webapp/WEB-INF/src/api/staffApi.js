import { post,get} from '../utils/request'
import url from '../utils/url';

export default {
    addStaff: staff => post(url.addStaff(),staff),
    getStaff: staffID => get(url.getStaff(staffID)),
    updataStaff: staff => post(url.updataStaff(), staff),
    deleteStaff: staffID => get(url.deleteStaff(staffID)),
    getStaffList: (condition) => post(url.getStaffList(),condition)
}