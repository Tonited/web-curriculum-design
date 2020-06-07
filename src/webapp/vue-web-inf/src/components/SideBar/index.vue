<template>
    <el-row class="tac">
        <el-col style="text-align: center">
            <el-avatar :size="150" icon="el-icon-user-solid" src="https://tonited.gitee.io/blog/medias/avatar.jpg"/>
            <h2>{{this.$store.state.transform.nowStaff === null ? '未登录' : this.$store.state.transform.nowStaff.name}}</h2>
        </el-col>
        <el-col>
            <el-menu
                    @select="selectMe"
                    default-active="search"
                    class="el-menu-vertical-demo"
            >
                <el-menu-item index="search">
                    <template slot="title">
                        <i class="el-icon-search"></i>
                        <span>员工查询</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="personnel">
                    <i class="el-icon-menu"></i>
                    <span slot="title">人事变动</span>
                </el-menu-item>
                <el-menu-item index="add">
                    <i class="el-icon-document"></i>
                    <span slot="title">添加员工</span>
                </el-menu-item>
                <el-menu-item index="logout">
                    <i class="el-icon-setting"></i>
                    <span slot="title">登出系统</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "SideBar",

        methods:{
            selectMe:function(index){
                if(index==="logout"){
                    this.$store.dispatch('transform/logout');
                    this.$router.push('/')
                }else {
                    this.$router.push('/index/' + index)
                }
            },

        }
    }
</script>

<style scoped>

</style>