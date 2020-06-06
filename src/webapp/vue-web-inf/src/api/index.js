import axios from 'axios';


const path = 'http://282472j9i9.imdo.co/admin';
const axiosRequest = axios

const api = {
    addStaff: newStaff => axiosRequest.post(path+'/staff/add',newStaff),
    getStaff: staffID => axiosRequest.get(path+`/get/staff/info?staffID=${staffID}`),
    updataStaff: newStaff => axiosRequest.post(path+'/staff/change',newStaff),
    deleteStaff: staffID => axiosRequest.get(path+`/staff/delete?staffID=${staffID}`),
    getStaffList: (staffName, departmentID, jobID) => axiosRequest.post(path+`/get/staff/list`,{staffName, departmentID, jobID}),
    getPersonnelList: () => axiosRequest.get(path+`/get/department/change/list`),
    getAllEduLv: ()=> axiosRequest.get(path+'/get/edulv'),
    getAllJob: () => axiosRequest.get(path+'/get/job'),
    getAllPersonnelType: () => axiosRequest.get(path+'/get/personnel/change'),
    getAllDepartment: () => axiosRequest.get(path+'/get/department'),
    login: (staffID, password) => axiosRequest.post(path+'/login',{staffID, password})
}

export default api;