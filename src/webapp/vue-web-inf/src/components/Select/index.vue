<template>
    <el-select v-model="value" placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "Select",
        props:{
            // options: [{
            //         value: '选项1',
            //         label: '黄金糕'
            //     }, {
            //         value: '选项2',
            //         label: '双皮奶'
            //     }]
            "options":Array,
            "value":Object
        }
    }
</script>

<style scoped>

</style>