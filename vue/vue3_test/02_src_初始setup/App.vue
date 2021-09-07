<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <button @click="sayHello">说话(vue3)</button><br><br>
  <button @click="sayWelcome">说话(vue2)</button><br><br>
  <button @click="test1">在vue2的方法里读取读vue3中的数据</button><br><br>
  <button @click="test2">在vue3的方法里读取读vue2中的数据</button><br><br>
</template>

<script>
  import {h} from 'vue'
  export default {
    name: 'App',

    //此处只是测试一下setup,暂不考虑响应式
    setup() {
      //数据
      let name = '张三'
      let age = 18

      //方法
      function sayHello(){
        alert(`我叫${name},我${age}岁了，你好~~~`)
      }

      function test2(){
        console.log(this.sex)
        console.log(this.sayWelcome)
      }

      //返回数据、方法
      return {
        name,
        age,
        sayHello,
        test2
      }

      //返回渲染函数
      // return ()=>{return h('h1','尚硅谷')}
      // return ()=>h('h1','尚硅谷') //上面的简写
    },


    //早vue3中也可以用vue2的配置方式
    data() {
      return {
        sex:'男'
      }
    },
    methods: {
      sayWelcome(){
        alert('欢迎来到尚硅谷学习')
      },
      test1(){
        console.log(this.name)
        console.log(this.sayHello)
      }
    },

  }
</script>


