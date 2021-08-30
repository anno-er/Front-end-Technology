//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

/* const Demo = Vue.extend({}) //VueComponent组件
const d = new Demo()  //组件的实例对象 此时该对象d已经能否调用Vue原型对象身上的所有属性
Vue.prototype.x = d   //将vc实例对象放置Vue的原型对象上，实现与其他所有组件的通信 */

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus = this  //这种方法更加的简单，安装全局事件总线
	}
})