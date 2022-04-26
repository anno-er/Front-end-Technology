<template>
  <div class="container">
    <!-- 左侧导航栏 -->
    <div class="side">
      <!-- 头像 -->
      <div class="img_box"></div>
      
      <!-- 练习项目标题 -->
      <ul>
        <li>
          <router-link class="r_link" active-class="active" to="/navigation">Navigation</router-link>
        </li>
        <li>
          <router-link class="r_link" active-class="active" to="/matGlass">Mat Glass</router-link>
        </li>
        
        
      </ul>

    </div>

    <!-- 右侧内容栏 -->
    <div class="right">
      <!-- 标题栏 -->
      <div class="title">
        <h1>Pratice</h1>
      </div>

      <!-- 内容展示区 -->
      <div class="show">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.side {
  width: 12vw;
  height: 100vh;
  background-color: rgb(37, 46, 51);
}

.side .img_box {
  width: 8vw;
  height: 8vw;
  background-color: brown;
  border-radius: 4vw;
  margin: 82px auto;
  transform: translateX(-8px);
  background-image: url('./assets/cdl.jpg');
  background-position: center center; 
  background-size: cover; 
  background-repeat: no-repeat;
}

.side ul{
  /* display: flex; */
  width: 100%;
  height: 100%;
  /* background-color: rgb(179, 34, 34); */
}


.side ul .r_link{
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  color: rgb(100, 78, 78);
}

.side ul .active{
  background-color: rgba(20, 166, 202, 0.8);
  color:rgba(37, 46, 51);
}

.right {
  width: 88vw;
  height: 100vh;
}

.right .title {
  height: 12vh;
  border-bottom: 1px solid black;
  background-color: rgba(129, 55, 55, 0.8);
}

.right .title h1 {
  height: 12vh;
  line-height: 12vh;
  text-align: center;
  color: aliceblue;
  font-size: 50px;
  font-family: "Courier New", Courier, monospace;
}
</style>
