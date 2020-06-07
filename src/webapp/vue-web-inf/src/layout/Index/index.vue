<template>
    <el-container >
        <el-aside>
            <SideBar/>
        </el-aside>
        <el-main>
            <div v-if="this.$store.state.transform.nowStaff === null">
                <el-alert
                        title="请先登录"
                        type="error"
                        description="未登陆无法访问"
                        show-icon>
                </el-alert>
            </div>
            <router-view  v-if="this.$store.state.transform.nowStaff !== null"/>
        </el-main>
    </el-container>
</template>

<script>
    import SideBar from "@/components/SideBar";
    export default {
        name: "Index",
        components: {
            SideBar
        },
        beforeMount() {
            this.$store.dispatch('transform/getAllDepartment');
        }
    }
</script>

<style scoped>

</style>