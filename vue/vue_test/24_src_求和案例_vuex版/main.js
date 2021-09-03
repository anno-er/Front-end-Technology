//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//引入使用vue-resource插件
import vueResource from 'vue-resource'
Vue.use(vueResource)

//引入store
import store from './store/index'

//关闭Vue的生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
    el:'#app',
    render: h=>h(App),
    store, //简写形式 store:store
    beforeCreate() {
        Vue.prototype.$bus = this //全局事件总线
    },
})