<template>
    <el-input v-model=vmodule :placeholder=placeholder></el-input>
</template>

<script>
    export default {
        name: "Input",
        props:{
            "vmodule": Object,
            "placeholder": String
        }
    }
</script>

<style scoped>

</style>