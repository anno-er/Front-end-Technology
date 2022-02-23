<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted(){
			// console.log('School',this.x)
			//$on 为this.x 绑定、监听事件
			/* this.$bus.$on('hello',(data)=>{
				console.log('我是School组件，收到了数据',data)
			}) */
			this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
				console.log('有人发布hello消息，hello消息回调执行了',msgName,data)
				// console.log(this)
			})
		},
		beforeDestroy(){
			// this.$bus.$off('hello')
			pubsub.unsubscribe(this.pubId)
		}
	}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>