<template>
  <div>
      <ul>
        <li :style="{opacity}">渐变透明度</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'News',
    data() {
      return {
        opacity:1
      }
    },
    /* beforeDestroy() {
      console.log('News组件即将被销毁')
      clearInterval(this.timer)
    }, */
    /* mounted(){
      this.timer = setInterval(() => {
        this.opacity -= 0.01
        if(this.opacity<=0) this.opacity = 1
      }, 16);
    } */

    activated(){
      console.log('News组件即将激活')
      this.timer = setInterval(() => {
        this.opacity -= 0.01
        if(this.opacity<=0) this.opacity = 1
      }, 16);
    },
    deactivated() {
      console.log('News组件即将失活')
      clearInterval(this.timer)
    },
}
</script>

<style>

</style>