<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/messages">Messages</router-link>
        </li>
      </ul>
      <!-- 路由缓存,使内容不被清除 -->

      <!-- include配置的是要保存的组件名  缓存一个-->
      <!-- <keep-alive include="News"> 
        <router-view></router-view>
      </keep-alive> -->

      <keep-alive :include="['News','message']"> <!-- include配置的是要保存的组件名  缓存多个-->
        <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
  };
</script>
