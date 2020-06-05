<template>
    <div class="all">
        <div class="left">
            <span>姓名:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="name"
                    clearable>
            </el-input>
        </div>
        <div class="right">
            <span>性别:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="sex"
                    clearable>
            </el-input>
        </div>
        <div class="left">
            <span>生日:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="bir"
                    clearable>
            </el-input>
        </div>
        <div class="right">
            <span>部门:</span>
<!--            下拉框均为可去除-->
            <template>
                <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                            v-for="item in  address"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div class="left">
            <span>学历:</span>
            <template>
                <el-select v-model="value" clearable placeholder="请选择">
                    <el-option
                            v-for="item in  eduLevel"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </template>
        </div>
        <div class="right">
            <span>职位:</span>
            <template>
                <el-select v-model="value" clearable placeholder="请选择">
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
            <span>电话:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="tlt"
                    clearable>
            </el-input>
        </div>
        <div class="right">
            <span>邮箱:</span>
            <el-input
                    placeholder="请输入内容"
                    v-model="email"
                    clearable>
            </el-input>
        </div>
        <el-button type="primary" plain>添加</el-button>
    </div>
</template>

<script>
    export default {
        name:"add",
        data() {
            return {
                name: '',
                sex:'',
                email:'',
                tlt:'',
                bir:'',
                eduLevel: [{
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }],
                    value: '',
                job: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
                address: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
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