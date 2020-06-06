<template>
    <div class="all">
        <div class="left">
            <span class="word">姓名:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="name"
                    clearable>
            </el-input>
        </div>
        <div class="right">
            <span class="word">性别:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="sex"
                    clearable>
            </el-input>
        </div>
        <div class="left">
            <span class="word">生日:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="bir"
                    clearable>
            </el-input>
        </div>
        <div class="right">
            <span class="word">部门:</span>
<!--            下拉框均为可去除-->
            <template>
                <el-select v-model="dep" clearable placeholder="请选择">
                    <el-option
                            v-for="item in department"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div class="left">
            <span class="word">学历:</span>
            <template>
                <el-select v-model="edu" clearable placeholder="请选择">
                    <el-option
                            v-for="item in eduLevel"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div class="right">
            <span class="word">职位:</span>
            <template>
                <el-select v-model="jobs" clearable placeholder="请选择">
                    <el-option
                            v-for="item in job"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div class="left">
            <span class="word">电话:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="tlt"
                    clearable>
            </el-input>
        </div>
        <div class="right">
            <span class="word">邮箱:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="email"
                    clearable>
            </el-input>
        </div>
        <el-button type="primary" plain v-on:click="addStaff">添加</el-button>
    </div>
</template>

<script>
     import api from "@/api";
     import  PersonModel from  "@/models/PersonModel"

    export default {
        methods:{
            addStaff(){
                const staff = PersonModel.fromJS({
                    id:null,
                    name: this.name,
                    sex: this.sex,
                    birthday:this.bir,
                    department:this.dep,
                    job:this.jobs,
                    eduLevel:this.edu,
                    tel:this.tlt,
                    email:this.email,
                });
                api.addStaff(staff).then(res=>{
                    if(res.data === true){
                        window.alert("添加员工成功");
                    }else {
                        window.alert("添加员工失败");
                    }
                })
            },
        },
        // mounted(){
        //     api.getAllEduLv().then(res => {
        //         if (res != null) {
        //             console.log(res)
        //             res.data.forEach(prd => {
        //                 this.eduLevel.unshift(EduLevelModel.fromJS(prd))
        //             })
        //         }
        //     }),
        //         api.getAllJob().then(res => {
        //             if (res != null) {
        //                 console.log(res)
        //                 res.data.forEach(prd => {
        //                     this.job.unshift(JobModel.fromJS(prd))
        //                 })
        //             }
        //     }),
        //     api.getAllDepartment().then(res => {
        //         if (res != null) {
        //             console.log(res)
        //             res.data.forEach(prd => {
        //                 this.department.unshift(DepartmentModel.fromJS(prd)),
        //             })
        //         }
        //     })
        // },
        data() {
            return {
                dep: '',
                edu: '',
                jobs: '',


                    name: '',
                    sex: '',
                    email: '',
                    tlt: '',
                    bir: '',
                    eduLevel:[
                        {
                            value: -1,
                            label: '未知'
                        }, {
                            value: 0,
                            label: '小学'
                        }, {
                            value: 1,
                            label: '初中'
                        }, {
                            value: 2,
                            label: '高中'
                        },  {
                            value: 3,
                            label: '职高'
                        },{
                            value: 4,
                            label: '大本'
                        },{
                            value: '5',
                            label: '大专'
                        },{
                            value: 6,
                            label: '硕士'
                        },{
                            value: 7,
                            label: '博士'
                        },{
                            value: 8,
                            label: '博士后'
                        },
                    ],
                    job:[{
                        value: -1,
                        label: '未知'
                    }, {
                        value: 0,
                        label: '前端工程师'
                    }, {
                        value: 1,
                        label: '后端工程师'
                    }, {
                        value: 2,
                        label: '算法工程师'
                    }, {
                        value: 3,
                        label: '全栈工程师'
                    },{
                        value: 4,
                        label: '安全工程师'
                    },{
                        value: 5,
                        label: '测试工程师'
                    },{
                        value: 6,
                        label: '架构师'
                    },],
                    department: [{
                        value: -1,
                        label: '未知'
                    }, {
                        value: 0,
                        label: '技术部'
                    }, {
                        value: 1,
                        label: '活动部'
                    }, {
                        value: 2,
                        label: '后勤部'
                    }, {
                        value: 3,
                        label: '外联部'
                    }],
                    value: '',
            }
            }

        }
</script>

<style scoped>
    .all{
        height: auto;
        width: 70%;
        margin-left: 10%;
        margin-top: 10%;
    }
    .word{
        font-size: 15px;
        font-weight: bold;
        margin-right: 4px;
    }
    .left{
        margin-left: 10%;
        margin-right: 20%;
        margin-bottom: 25px;
        display: inline-block;
    }
    .right{
        margin-bottom: 25px;
        display: inline-block;
    }
    .el-input{
        width: 85%;
    }
    .el-button{
        margin-top: 80px;
        margin-left: 45%;
    }
</style>