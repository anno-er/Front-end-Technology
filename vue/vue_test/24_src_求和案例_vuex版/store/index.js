//此文件用于创建vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入使用Vuex插件
import Vuex from 'vuex'
Vue.use(Vuex)

//准备actions 用于响应组件中的动作
const actions = {
    jia(context,value){
        context.commit('JIA',value)
    },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    },

}

//准备mutations 用于操作数据（state)
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
}

//准备 用于存储数据（state)
const state = {
    sum:0
}

//创建并向外暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state 
})

