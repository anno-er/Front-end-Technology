<template>
  <div class="app">
    <h3>我是app组件(祖)</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>

      <template v-slot:fallback>
        <h3>loading....</h3>
      </template>
      
    </Suspense>
    
  </div>
</template>

<script>
  
  // import Child from './components/Child' //静态引入
  import {defineAsyncComponent} from 'vue'
  const Child = defineAsyncComponent(()=>import('./components/Child')) //动态（异步）引入
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