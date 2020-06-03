<template>
    <el-row class="tac">
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
        created: function() {
            this.$router.push('/index/search')
        },
        methods:{
            selectMe:function(index){
                this.$router.push('/index/'+index)
            },

        }
    }
</script>

<style scoped>

</style>