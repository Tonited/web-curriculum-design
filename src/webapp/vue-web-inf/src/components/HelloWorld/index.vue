<template>
  <div class="hello">
    <img alt="Vue logo" src="../../assets/logo.png">
    <!-- 用来获取store数据的测试 -->
    <h1>{{this.$store.state.helloworlds.testtext}}</h1>

    <!--  v-model的测试  -->
    <input v-model="testActionText"/>

    <!--  这两行是Vuex的action测试  -->
    <button v-on:click="testStoreAction()">测试</button>
    <h2>{{testActionText}}</h2>

    <!--  axios的测试  -->
    <div v-for="dep in departments" :key="dep.id">
      <div>ID:{{dep.id}}</div>
      <div>部门名称：{{dep.name}}</div>
    </div>
    <button v-on:click="getAllDepartment()">测试Axios</button>

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import DepartmentModel from "../../../models/DepartmentModel";
  import api from "../../api";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      // v-module 和 Vuex的action 的测试数据
      testActionText: 'test',
      // axios的测试数据
      departments: []
    }
  },
  methods:{
    // Vuex的action测试
    testStoreAction(){
      this.$store.dispatch('helloworlds/changeTestText',this.testActionText);
    },

    // axios和api的测试
    getAllDepartment(){
      api.getAllDepartment().then(res=>{
        console.log(res)
        if(res != null){
          res.data.forEach(dep=>{
            this.departments.unshift(DepartmentModel.fromJS(dep))
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
