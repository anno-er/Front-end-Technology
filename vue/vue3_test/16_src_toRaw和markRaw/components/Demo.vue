<template>
  <h3>当前求和为： {{sum}}</h3>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名： {{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h2 v-show="person.car">车子：{{person.car}}</h2>
  <hr>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长薪资</button>

  <button @click="rawPerson">输出最原始的person</button>
  <button @click="addcar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price ++">换价格</button>
</template>

<script>
import {ref,reactive,toRefs,toRaw,markRaw} from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0)  
    let person = reactive({
        name:'张三',
        age:18,
        job:{
            j1:{
                salary:20
            }
        }
    })

    function rawPerson(){
      // console.log(person)
      const p = toRaw(person)
      p.age ++
      console.log(p)
    }

    function addcar(){
      let car = {name:'奔驰',price:40}
      person.car = markRaw(car)
    }

    return {
      sum,
      person,
      ...toRefs(person),
      rawPerson,
      addcar
    };
  },
};
</script>


