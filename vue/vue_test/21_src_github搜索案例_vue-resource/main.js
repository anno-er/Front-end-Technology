//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//关键Vue的生产提示
Vue.config.productionTip = false

//引入插件
import vueResource from 'vue-resource'

//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
    el:'#app',
    render: h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this //全局事件总线
    },
})