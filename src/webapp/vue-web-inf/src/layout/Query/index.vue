<template>
    <div>
        <div id="search-ragin">
            <el-row type="flex" class="row-bg" :gutter="25">
                <el-col :span="7">
                    <el-input v-model='name' placeholder='姓名'/>
                </el-col>
                <el-col :span="7">
                    <el-select v-model="nowDep" placeholder="职位" style="width:100%">
                        <el-option
                                v-for="item in this.$store.state.transform.departmentType"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="7">
                    <el-select v-model="nowJob" placeholder="部门" style="width:100%">
                        <el-option
                            v-for="item in this.$store.state.transform.jobType"
                            :key="item.id"
                            :label="item.description"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="3" :offset="2">
                    <el-button type="primary" icon="el-icon-search" v-on:click="search">查找</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table-region">
            <el-table
                    :data="this.$store.state.transform.showStaff"
                    style="width: 100%"
                    max-height="100%">
                <el-table-column
                        fixed
                        prop="id"
                        label="账号"
                        >
                </el-table-column>
                <el-table-column
                        prop="passwd"
                        label="密码"
                 >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                >
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别"
                >
                </el-table-column>
                <el-table-column
                        prop="birthday"
                        label="生日"
                >
                </el-table-column>
                <el-table-column
                        prop="department"
                        label="部门"
                >
                </el-table-column>
                <el-table-column
                        prop="job"
                        label="职务"
                >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                >
                    <template slot-scope="scope">
                        <el-button
                                @click.native.prevent="editRow(scope.row)"
                                type="text"
                                size="small"
                        >
                            添加
                        </el-button>
                        <el-button
                                @click.native.prevent="deleteRow(scope.row)"
                                type="text"
                                size="small">
                            移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Query",
        data(){
            return {
                nowDep:-1,
                nowJob:-1,
                name:''
            }
        },
        methods: {
            deleteRow(inf) {
                // rows.splice(index, 1);
                console.log(inf)
                this.$store.dispatch('transform/deleteStaff',inf.id)
            },
            editRow(inf) {
                console.log(inf)
            },
            search(){
                this.$store.dispatch('transform/getStaff',[this.name,this.nowDep,this.nowJob])
            }
        },
        mounted() {
            //staffName,departmentID,jobID
            this.$store.dispatch('transform/getStaff',[null,null,null])
        }
    }
</script>

<style scoped>

</style>