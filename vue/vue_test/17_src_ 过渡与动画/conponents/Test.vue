<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- <h1 v-show="isShow" class="go">内容</h1> -->
      <transition name="hello" :appear="true">
          <h1 v-show="isShow">内容</h1> <!-- v-show 为真时意味着着进入 -->
      </transition>
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
    }
    div{
        width: 500px;
    }

    .hello-enter-active{
        animation: contact 0.5s ;
    }

    .hello-leave-active{
        animation: contact 0.5s reverse;
    }

    @keyframes contact {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>