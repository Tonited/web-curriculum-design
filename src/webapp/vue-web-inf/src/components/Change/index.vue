<template>
    <div>
        <el-table
                :data="personnelchange"
                max-height="600"
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
    import api from "@/api";
    import PersonnelChangeModel from "@/models/PersonnelChangeModel";
    export default {
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