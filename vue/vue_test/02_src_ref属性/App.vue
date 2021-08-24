<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click='showDOM' ref="btn">点我输出上方的Dom元素</button>
      <School id="sch"/>
      <School ref="sch"/>

  </div>
</template>

<script>
    //引入School组件
    import School from "./conponents/School";
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'学如逆水行舟，不进则退'
            }
        },
        methods:{
            showDOM(){
                console.log(document.getElementById('sch'))
                console.log(this.$refs.sch)   //获取到School组件的实例对象
                console.log(this.$refs.title) //获取到真实DOM元素
            }
        }
    };
</script>

<style>
</style>