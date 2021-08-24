<template>
  <div>
      <School></School>
      <hr>
      <Student></Student>
      <hr>
  </div>
</template>

<script>
    import Student from "./conponents/Student";
    import School from "./conponents/School";
    export default {
        name:'App',
        components:{Student,School},
    };
</script>

<style>
</style>