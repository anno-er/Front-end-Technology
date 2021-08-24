//引入Vue
import Vue from 'vue'
import { mixin,mixin2 } from './mixin'
//引入App
import App from './App.vue'



//关键Vue的生产提示
Vue.config.productionTip = false

//全局引入mixin
Vue.mixin(mixin)
Vue.mixin(mixin2)

//创建vm
new Vue({
    el:'#app',
    render: h=>h(App)
})