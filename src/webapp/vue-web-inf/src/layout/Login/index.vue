<template>
    <div class="back">
        <el-row>
            <el-col :span="5" :offset="1">
                    <el-form :model="loginStaff" ref="loginForm" label-width="70px" class="loginForm">
                        <h2 style="margin-left: 50%">登陆</h2>
                        <el-form-item label="账号" :rules="[{ required: true, message: '请输入账号'}]" prop="id">
                            <el-input type="id" v-model="loginStaff.id"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" :rules="[{ required: true, message: '请输入密码'}]" prop="passwd">
                            <el-input type="passwd" v-model="loginStaff.passwd"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-left: 25%">
                            <el-button type="primary" @click="handleLogin('loginForm')">登陆</el-button>
                        </el-form-item>
                    </el-form>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import api from '@/api';
    export default {
        name: "Login",
        data(){
            return{
                loginStaff:{
                    id:'',
                    passwd:''
                }
            }
        },
        methods:{
            handleLogin(loginForm){
                this.$refs[loginForm].validate((valid) => {
                    if (valid) {
                        api.login(this.loginStaff.id, this.loginStaff.passwd).then(res=>{
                            if(res.data.result === 'OK'){
                                api.getStaff(this.loginStaff.id).then(res=>{
                                    this.$store.dispatch('transform/setNowStaff',res.data)
                                    this.$message({
                                        message: '登陆成功',
                                        type: 'success'
                                    });
                                    this.$router.push('/index/search')
                                })
                            }else{
                                this.$message.error('账号或密码错误')
                            }
                        }).catch(err=>{
                            this.$message.error('登陆失败'+err)
                        })

                    } else {
                        this.$message.error('请完善登陆信息')
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .loginForm{
        margin-top: 65%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background: rgba(255, 255, 255, 0.8)
    }
    .back{
        position:fixed;
        height: 100%;
        width: 100%;
        background-image: url('../../assets/back.jpg');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>