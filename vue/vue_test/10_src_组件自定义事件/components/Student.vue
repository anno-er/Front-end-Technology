<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>当前求和为{{number}}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentName">将学生名字交给App组件</button>
		<button @click="unbind">解绑myClick事件</button>
		<button @click="death">销毁当前的Student组件的实例（VC）</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男',
				number:0,
			}
		},
		methods:{
			sendStudentName(){
				//触发Student组件实例身上的自定义事件myClick
				this.$emit('myClick',this.name,666,88,900)
				// this.$emit('demo')
			},
			unbind(){
				this.$off('myClick') //解绑一个自定义事件
				// this.$off(['myClick','demo']) //解绑多个自定义事件
				// this.$off()//解绑所有自定义事件
			},
			death(){
				this.$destroy()//销毁了当前的Student实例，销毁后所有Student实例的自定义事件都不奏效了
			},
			add(){
				console.log('add回调被调用了')
				this.number++
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
