<template>
    <div class="query">
        <span class="word">姓名:</span>
        <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
        </el-input>
        <span class="word">员工ID:</span>
        <el-input
                placeholder="请输入内容"
                v-model="IDinput"
                clearable>
        </el-input>
        <span class="word">部门:</span>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" style="margin-left: 5%">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete">删除</el-button>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="ID"
                    label="员工号"
                    width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="birthday"
                    label="生日"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="department"
                    label="部门"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="telephone"
                    label="电话"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="education"
                    label="教育水平"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="状态"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000" style="float: right;margin-top: 25px">
        </el-pagination>

    </div>
</template>


<script>
    export default {
        name:'Query',
        data() {
            return {
               input: '',

                IDinput:"",

                tableData: [
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, ],
                cities: [{
                    value: 'Beijing',
                    label: '北京'
                }, {
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Nanjing',
                    label: '南京'
                }, {
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }],
                value: ''
            }

        }
    }
</script>

<style>
    .el-input{
        width: 15%;
    }
    .word{
        font-size: 20px;
        margin-left: 10px;
        margin-right: 15px;
    }
</style>