import Vue from 'vue'
import App from './App.vue'
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false


//
new Vue({
  //将App组件放入容器app中
  render: h => h(App),
}).$mount('#app')
