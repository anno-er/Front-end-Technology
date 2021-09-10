<template>
  <Demo 
    @hello = 'showHelloMsg' msg='hello' school='fuda'>
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
    <template v-slot:asd>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from "./components/Demo";
  export default {
    name: "App",
    components:{Demo},
    setup(props) {
      function showHelloMsg(value){
        alert(`你好啊，你触发了hello时间，我收到的参数是:${value}!`)
      }

      return{
        showHelloMsg, 
      }
    }
  };
</script>


