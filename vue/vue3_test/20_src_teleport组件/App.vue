<template>
  <div class="app">
    <h3>我是app组件(祖)</h3>
    <Child></Child>
  </div>
</template>

<script>
  import {reactive,toRefs,provide} from 'vue'
  import Child from './components/Child'
  
  export default {
    name:'App',
    components:{Child},
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>