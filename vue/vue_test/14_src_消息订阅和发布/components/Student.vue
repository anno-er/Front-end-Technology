<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<button @click="sendStudentName">将学生名给School组件</button>
		</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
			}
		},
		mounted(){
			// console.log('Student',this.x)
		},
		methods:{
			sendStudentName(){
				//$emit触发this.x的hello事件，并带上数据666
				/* this.$bus.$emit('hello',this.name) */
				pubsub.publish('hello',666)
			}
		}
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 5px;
	}
</style>
