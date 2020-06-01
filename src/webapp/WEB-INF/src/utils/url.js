const path = '/admin'

export default {
    addStaff: () => path+'/staff/add',
    getStaff: staffID => path+`/get/staff/info?staffID=${staffID}`,
    updataStaff: () => path+'/staff/change',
    deleteStaff: staffID => path+`/staff/delete?staffID=${staffID}`,
    getStaffList: () => path+`/get/staff/list`,
    getPersonnelList: () => path+`/get/department/change/list`,
    getAllEduLv: ()=> path+'/get/edulv',
    getAllJob: () => path+'/get/job',
    getAllPersonnelType: () => path+'/get/personnel/change',
    getAllDepartment: () => path+'/get/department',
    login: () => path+'/login'
}