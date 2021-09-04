<template>
  <ul>
      <h4>消息编号: {{$route.query.id}}</h4>
      <h4>消息标题: {{$route.query.title}}</h4>
  </ul>
</template>

<script>
export default {
    name:'Detail'
}
</script>

<style>

</style>