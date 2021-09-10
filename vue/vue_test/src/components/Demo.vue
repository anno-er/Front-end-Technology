<template>
  <div class="demo">
      <h2>我是demo组件</h2>
      <!-- <slot></slot><hr>
      <slot></slot> -->

      <slot name="test1">默认值</slot> <br>
      <slot name="test2">默认值</slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .demo{
        /* width: 300px; */
        height: 40px;
        background-color: crimson;
    }
</style>