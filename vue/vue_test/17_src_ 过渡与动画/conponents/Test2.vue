<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- <h1 v-show="isShow" class="go">内容</h1> -->
      <transition-group name="hello" :appear="true">
          <h1 v-show="isShow" key="1">内容</h1> <!-- v-show 为真时意味着着进入 -->
          <h1 v-show="!isShow" key="2">内容2</h1>
      </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: tomato;
        height: 50px;
        line-height: 50px;
        /* transition: 0.5s ; */
    }
    div{
        width: 500px;
    }

    /* 进入的起点 */  /* 离开的终点 */
    .hello-enter,.hello-leave-to {
        transform: translateX(-100%);
    }

    .hello-enter-active,.hello-leave-active{
        transition: 0.5s ;
    }

    /* 进入的终点 */  /* 离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }



    
 

    
</style>