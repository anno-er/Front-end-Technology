<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About------>beforeRouteEnter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "changdonglin") {
        next();
      } else {
        alert("不是本人，无权限");
      }
    } else {
      next();
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About------>beforeRouteLeave");
    next();
  },
};
</script>
