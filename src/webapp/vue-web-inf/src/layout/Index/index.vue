<template>
    <el-container>
        <el-aside>
            <SideBar/>
        </el-aside>
        <el-main>
            <router-view/>
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
        mounted() {
            this.$store.dispatch('transform/getAllDepartment');
        }
    }
</script>

<style scoped>

</style>