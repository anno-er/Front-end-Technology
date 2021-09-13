<template>
  <div class="child">
    <h3>我是child组件(子)</h3>
    <Son></Son>
  </div>
</template>

<script>
    import {inject} from 'vue'
    import Son from './Son'
    export default {
        name:'Child',
        components:{Son},
        setup() {
            let x = inject('car')
            console.log(x,'child')
        }
    }
</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>