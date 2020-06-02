import Vue from "vue";
import Vuex from "vuex";
import getters from "./getter";
import helloworlds from "./modules/helloworld"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules : {
        helloworlds,
    },
    getters
})

export default store;