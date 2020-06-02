const state = {
    testtext: '状态仓库测试'
}

const mutations = {
    CHANGE_TEST_TEXT : (state, newText) =>{
        state.testtext = newText
    }
}

const actions = {
    changeTestText({commit}, newText){
        commit('CHANGE_TEST_TEXT', newText);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}