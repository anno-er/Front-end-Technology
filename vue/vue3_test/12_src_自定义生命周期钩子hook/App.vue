<template>
  <button @click="isShowDemo =! isShowDemo">切换隐藏现实</button>
  <Demo v-if="isShowDemo"></Demo>
  <Test></Test>
  
</template>

<script>
  import { ref } from "vue";
  import Demo from "./components/Demo";
  import Test from "./components/Test";
  
  export default {
    name: "App",
    components: { Demo,Test },
    setup() {
      let isShowDemo = ref(true)
      return{
        isShowDemo
      }
    },
  };
</script>


