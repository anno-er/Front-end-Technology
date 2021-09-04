<template>
  <ul>
      <h4>消息编号: {{id}}</h4>
      <h4>消息标题: {{title}}</h4>
      <!-- <h4>a: {{a}}</h4>
      <h4>b: {{b}}</h4> -->
  </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title']
}
</script>

<style>

</style>