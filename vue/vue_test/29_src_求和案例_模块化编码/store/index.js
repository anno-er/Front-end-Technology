//此文件用于创建vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入使用Vuex插件
import Vuex from 'vuex'
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'

//创建并向外暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

