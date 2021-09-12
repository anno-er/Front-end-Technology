<template>
  <h3>当前的x值是： {{x.y}}</h3>
  <button @click="x.y++">点我x.y+1</button>
  <hr>
  <h2>{{person}}</h2>
  <h2>姓名： {{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <hr>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    // let person = shallowReactive({ //只考虑第一层的响应式数据
    let person = shallowReactive({
        name:'张三',
        age:18,
        job:{
            j1:{
                salary:20
            }
        }
    })
    // let x = ref(0)  
    let x = shallowRef({  //shallowRef面对基本类型和ref一样，面对对象类型会浅层ref
      y:0
    })  
    console.log('************',x)

    return {
      x,
      person,
      ...toRefs(person)
      
    };
  },
};
</script>


