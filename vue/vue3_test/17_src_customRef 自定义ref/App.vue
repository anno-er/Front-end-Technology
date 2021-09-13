<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
  import { ref,customRef } from "vue";
  export default {
    name: "App",
    setup() {
      //自定义ref函数---myRef
      function myRef(value){
        return customRef((track,trigger)=>{
          let timer
          return {
            get(){
              console.log(`有人从myRef中读取数据了,我把${value}给它了`)
              track() //通知Vue追踪Value的变化，提前告知get约定value需要追踪
              return value
            },
            set(newVaule){
              console.log(`有人把myRef中的数据改为了${newVaule}`)
              clearTimeout(timer)
              timer = setTimeout(() => {
                value = newVaule
                trigger() //通知Vue重新解析模板
              }, 500);
              
            },
          }
        })


      }
      //let keyWord = ref('hello') //使用Vue提供的ref
      let keyWord = myRef('hello') //使用程序员自定义的ref
      
      return{
        keyWord
      }
    },
  };
</script>


