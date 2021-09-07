<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作：{{ person.job.type }}</h3>
  <h3>薪水:{{ person.job.salary }}</h3>
  <h3>爱好:{{ person.hobby }}</h3>
  <h3>测试的数据:{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改信息</button>
  <button @click="addSex">添加性别属性</button>
  <button @click="delName">删除name属性</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",

  setup() {
    //ref 使数据成为响应式数据
    /* let name = ref('张三')
      let age = ref(18)
      let job = reactive({
        type:'前端工程师',
        salary:'30k',
        a:{
          b:{
            c:666
          }
        }
      })
      let hobby = reactive(['somke','drink','haircut']) */

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby:['somke','drink','haircut']
    });

    //方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "前端全栈工程师";
      person.job.salary = "50k";
      person.job.a.b.c = 999;
      person.hobby[0] = "study";
    }

    function addSex(){
      person.sex = '男'
    }

    function delName(){
      delete person.name
    }

    //返回数据、方法
    return {
      person,
      changeInfo,
      addSex,
      delName
    };
  },
};
</script>


