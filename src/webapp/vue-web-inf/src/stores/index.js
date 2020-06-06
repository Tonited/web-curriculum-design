import Vue from "vue";
import Vuex from "vuex";
import getters from "./getter";
import helloworlds from "./modules/helloworld"
import transform from "./modules/transform";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules : {
        helloworlds,
        transform
    },
    getters
})

export default store;