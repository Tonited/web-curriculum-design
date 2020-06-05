<template>
    <div>
        <el-table
                :data="personnelchange"
                stripe>
            <el-table-column
                    prop="id"
                    label="序号">
            </el-table-column>
            <el-table-column
                    prop="description"
                    label="描述">
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
                }
            }
    }
</script>

<style scoped>
</style>