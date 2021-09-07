<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作：{{job.type}}</h3>
  <h3>薪水{{job.salary}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
  import {ref} from 'vue'
  export default {
    name: 'App',

    setup() {
      //ref 使数据成为响应式数据
      let name = ref('张三')
      let age = ref(18)
      let job = ref({
        type:'前端工程师',
        salary:'30k'
      })
      

      //方法
      function changeInfo(){
        name.value='李四'
        age.value = 48
        job.value.type = '前端全栈工程师'
        job.value.salary = '50k'
        console.log(job.value)
        
      }

      //返回数据、方法
      return {
        name,
        age,
        job,
        changeInfo,
        
      }
    },

  }
</script>


