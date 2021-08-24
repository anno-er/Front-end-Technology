<template>
  <div>
      <h1 class="title">你好啊</h1>
      <School></School>
      <hr>
      <Student></Student>
      <hr>
  </div>
</template>

<script>

    import Student from "./conponents/Student"
    import School from "./conponents/School"
    
    export default {
        name:'App',
        components:{School,Student},
    };
</script>

<style scoped>
    .title{
        color: red;
    }
</style>