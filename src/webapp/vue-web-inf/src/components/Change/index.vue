<template>
    <div>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import api from "../../api";
    import PersonnelChangeModel from "@/models/PersonnelChangeModel";
    export default {
        methods: {
            },
        mounted(){
                api.getPersonnelList().then(res => {
                    if (res != null) {
                        res.data.forEach(prd => {
                            this.personnelchange.unshift(PersonnelChangeModel.fromJS(prd))
                        })
                    }
                })
        },
            data() {
                return {
                    personnelchange:[],

                    // tableData: [{
                    //     ID:  personnelchange.id,
                    //     description:  personnelchange.description
                    // }],
                }
            }
    }
</script>

<style scoped>
</style>