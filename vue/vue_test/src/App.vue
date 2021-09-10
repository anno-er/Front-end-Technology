<template>
  <div>
      <h1>APP组件</h1>
      <Demo>
        <!-- <span>span插槽</span>
        <span>span1插槽</span> -->

        <template slot="test1">
          <span>
            具名插槽1
          </span>
        </template>

        <template slot="test2">
          <span>
            具名插槽2
          </span>
        </template>
      </Demo>
  </div>
</template>

<script >
  import Demo from './components/Demo'
  export default {
    name: "App",
    components:{Demo},
    data() {
      return {};
    },
  };
</script>

<style scoped>
  div{
    margin: 0 auto;
    width: 400px;
    height: 200px;
    background-color: burlywood;
  }
</style>



