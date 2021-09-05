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
      <keep-alive include="News"> <!-- include配置的是要保存的组件名 -->
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
