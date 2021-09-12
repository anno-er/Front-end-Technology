<template>
  <h1>当前求和为{{ sum }}</h1>
  <button @click="sum++">点我加1</button>
  <hr />
  <h1>当前的信息为{{ msg }}</h1>
  <button @click="msg += '!!!'">修改信息</button>

  <h2>姓名： {{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>

  <hr>
  <h2>薪资：{{person.job.j1.salary}}K</h2>
  <button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, computed, watch} from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let msg = ref('hello')
    let person = ref({
        name:'张三',
        age:18,
        job:{
            j1:{
                salary:20
            }
        }
    })

    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值变化了',newValue,oldValue)
    })

    watch(person,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue)
    },{deep:true})

    /* watch(person.value,(newValue,oldValue)=>{
      console.log('person的值变化了',newValue,oldValue)
    }) */

    return {
      sum,
      msg,
      person
    };
  },
};
</script>


