<template>
  <div class="container">
    <Category title="游戏" >
      <template scope="atguigu">
        <ul>
          <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
      
    <Category title="游戏" >
      <template scope="atguigu">
        <ol>
          <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏" >
      <template slot-scope="atguigu">  <!-- 这种写法也可以 -->
        <h4>
          <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </h4>
      </template>
    </Category>
  </div>
</template>

<script >
  import Category from './components/Category'
  

  export default {
    name: "App",
    components:{Category},
  };
</script>

<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }
  .foot{
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
  }
  h4{
    margin-left: 10px;
  }

  
</style>



