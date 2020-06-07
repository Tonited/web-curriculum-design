import api from '@/api';
import DepartmentModel from '@/models/DepartmentModel'
import EduLevelModel from "@/models/EduLevelModel";
import JobModel from "@/models/JobModel";
import PersonnelChangeModel from "@/models/PersonnelChangeModel";
import PersonModel from '@/models/PersonModel';

const state = {
    nowStaff:null,
    staff:[],
    showStaff:[],
    departmentType: [],
    eduLevelType: [],
    jobType: [],
    personnalType: [],
    nowEdit:null,
}

const mutations = {
    GET_ALL_MAPPING: (state) => {
        state.departmentType = [];
        state.eduLevelType = [];
        state.jobType = [];
        state.personnalType = [];
        api.getAllDepartment().then(res => {
            res.data.forEach(item => {
                state.departmentType.push(DepartmentModel.fromJS(item))
            })
            return 0;
        })
        api.getAllEduLv().then(res => {
            res.data.forEach(item => {
                state.eduLevelType.push(EduLevelModel.fromJS(item))
            })
            return 0;
        })
        api.getAllJob().then(res => {
            res.data.forEach(item => {
                state.jobType.push(JobModel.fromJS(item))
            })
            return 0;
        })
        api.getAllPersonnelType().then(res => {
            res.data.forEach(item => {
                state.personnalType.push(PersonnelChangeModel.fromJS(item))
            })
            return 0;
        })
        setTimeout(null, 500)
    },
    //staffName,departmentID,jobID
    GET_STAFF_LIST: (state, inf) => {
        state.staff = [];
        state.showStaff = [];
        api.getStaffList(inf[0], inf[1], inf[2]).then(res => {
            res.data.map(item => {
                const staff = PersonModel.fromJS(item);
                state.staff.push(staff);
                const newStaff = PersonModel.fromJS(staff);
                state.jobType.forEach(item => {
                    if (item.id === newStaff.job) {
                        newStaff.job = item.description
                    }
                })
                state.departmentType.forEach(item => {
                    if (item.id === newStaff.department) {
                        newStaff.department = item.name
                    }
                })
                state.showStaff.push(newStaff);
                return 0;
            })

            return 0;
        })
    },

    DELETE_STAFF: (state, staffID) => {
        state.staff.map((staff, index) => {
            if (staff.id === staffID) {
                state.staff.splice(index, 1);
                return 0;
            }
        })
        state.showStaff.map((staff, index) => {
            if (staff.id === staffID) {
                state.showStaff.splice(index, 1);
                return 0;
            }
        })
        api.deleteStaff(staffID).then(res => {
            if (res.data === true) {
                this.$message({
                    message: '员工' + staffID + '已删除',
                    type: 'success'
                })
            } else {
                this.$message.error('删除失败')
            }
        });
    },

    SET_NOW_EDIT: (state, staffID) => {
        state.nowEdit = staffID;
    },

    SET_NOW_STAFF: (state, staff) => {
        state.nowStaff = staff;
    },

    LOG_OUT: (state) => {
        state.nowStaff = null;
    }
}


const actions = {
    getAllDepartment({commit}){
        commit('GET_ALL_MAPPING')
    },
    //staffName,departmentID,jobID
    getStaff({commit},inf){
        commit('GET_STAFF_LIST',inf)
    },

    deleteStaff({commit},staffID){
        commit('DELETE_STAFF',staffID)
    },

    setNowEdit({commit}, staffID){
        commit('SET_NOW_EDIT', staffID)
    },

    setNowStaff({commit}, staff){
        commit('SET_NOW_STAFF',staff);
    },

    logout({commit}){
        commit('LOG_OUT')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}