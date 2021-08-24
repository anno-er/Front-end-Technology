<template>
  <div>
      <Student name='李四' sex='女' :age='18'></Student>
      <hr>
      <Student name='王老五' sex='男' :age='38'></Student>
      <hr>
  </div>
</template>

<script>
    import Student from "./conponents/Student";
    export default {
        name:'App',
        components:{Student},
    };
</script>

<style>
</style>