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
  //vue2的watch(简写)
  /* watch: {
    sum(newValue,oldValue) {
      console.log("sum的值改变了",newValue,oldValue);
    },
  }, */

  //vue2的watch(完整)
  /* watch: {
    immediate: true,
    deep:true,
    sum: {
      handler(newValue, oldValue) {
        console.log("sum的值改变了", newValue, oldValue);
      },
    },
  }, */

  setup(props, context) {
    let sum = ref(0);
    let msg = ref('hello')
    let person =reactive({
        name:'张三',
        age:18,
        job:{
            j1:{
                salary:20
            }
        }
    })

    //vue3中的watch监视(情况一：监视ref定义一个响应式的数据)
    /* watch(sum,(newValue, oldValue)=>{    
        console.log("sum的值改变了", newValue, oldValue);
    },{immediate:true,deep:true}) */

    //vue3中的watch监视(情况二：监视ref定义多个响应式的数据)
    /* watch([sum,msg],(newValue, oldValue)=>{
        console.log("sum或者msg的值改变了", newValue, oldValue);
    },{immediate:true,deep:true}) */

    //vue3中的watch监视(情况三：监视reactive定义的一个对象中的全部数据)
    /* 
        注意1：此处无法正确获得oldValue
        注意2：强制开启了深度监视，deep配置无效
    */
    /* watch(person,(newValue, oldValue)=>{
        console.log('person变化了',newValue, oldValue)
    },{deep:false}) */

    //vue3中的watch监视(情况四：监视reactive定义的一个对象中的某一个属性)
    /* 
        注意1：此处可以正确获得oldValue
    */
    /* watch(()=>person.age,(newValue, oldValue)=>{
        console.log('person的age变化了',newValue, oldValue)
    }) */

    //vue3中的watch监视(情况五：监视reactive定义的一个对象中的某一些属性)
    /* 
        注意1：此处可以正确获得oldValue
    */
    /* watch([()=>person.age,()=>person.name],(newValue, oldValue)=>{
        console.log('person变化了',newValue, oldValue)
    }) */

    //vue3中的watch监视(特殊情况：只想监视对象中的job(对象中的对象))
    /* 
        注意1：此处需要配置deep
    */
    /* watch(()=>person.job ,(newValue, oldValue)=>{
        console.log('person的job变化了',newValue, oldValue)
    },{deep:true}) */ //此处由于监视的是reactive所定义的对象中的某个属性（还是对象），所以deep配置有效

    //返回数据、方法
    return {
      sum,
      msg,
      person
    };
  },
};
</script>


