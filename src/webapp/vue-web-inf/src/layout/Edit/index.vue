<template>
    <el-row>
        <el-col :span="12" :offset="6">
        <el-form :model="newStaffInfo" ref="editForm" label-width="80px">
        <el-form-item label="姓名" :rules="[{ required: true, message: '姓名不能为空'}]" prop="name">
            <el-input type="name" v-model="newStaffInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-input v-model="newStaffInfo.sex"></el-input>
        </el-form-item>
        <el-form-item label="密码" :rules="[{ required: true, message: '密码不能为空'}]" prop="passwd">
            <el-input type="passwd" v-model="newStaffInfo.passwd"></el-input>
        </el-form-item>
        <el-form-item label="教育情况">
            <el-select v-model="newStaffInfo.eduLevel" placeholder="职务" style="width: 100%">
                <el-option
                        v-for="item in this.$store.state.transform.eduLevelType"
                        :key="item.id"
                        :label="item.description"
                        :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="部门">
            <el-select v-model="newStaffInfo.department" placeholder="部门"  style="width: 100%">
                <el-option
                        v-for="item in this.$store.state.transform.departmentType"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="职务">
            <el-select v-model="newStaffInfo.job" placeholder="职务"  style="width: 100%">
                <el-option
                        v-for="item in this.$store.state.transform.jobType"
                        :key="item.id"
                        :label="item.description"
                        :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="生日">
            <el-col >
                <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="newStaffInfo.birthday" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="电话">
            <el-input v-model="newStaffInfo.tel"></el-input>
        </el-form-item>
        <el-form-item label="专业技能">
            <el-input v-model="newStaffInfo.spciality"></el-input>
        </el-form-item>
        <el-form-item label="状态">
            <el-input v-model="newStaffInfo.state"></el-input>
        </el-form-item>

        <el-form-item style="text-align: center">
            <el-button type="primary" @click="handleEdit('editForm')">确认修改</el-button>
        </el-form-item>
    </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import api from '@/api';
    import PersonModel from "@/models/PersonModel";
    export default {
        name: "Edit",
        data(){
            return {
                newStaffInfo: {}
            }
        },
        mounted() {
            api.getStaff(this.$store.state.transform.nowEdit).then(res=>{
                this.newStaffInfo = PersonModel.fromJS(res.data);
            })
        },
        methods:{
            handleEdit(editForm){
                this.$refs[editForm].validate((valid) => {
                    if (valid) {
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });

                        api.updataStaff(this.newStaffInfo).then(res =>{
                            if(res.data === true) {
                                this.$router.push('/index/search');
                            }else {
                                this.$message.error('服务端报错')
                            }
                        }).catch(err=>{
                            this.$message.error('修改失败'+err)
                        })
                    } else {
                        this.$message.error('修改失败')
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>