<template>
  <div class="container">
    <Category title="美食"> 
      <img slot="mid" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="http://www.baidu.com">更多美食尽在百度</a>
    </Category>
    <Category title="游戏" >
      <ul slot='mid'>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div slot="footer" class="foot"> 
        <a href="http://www.4399.com">单机游戏</a>
        <a href="http://www.4399.com">网络游戏</a>
      </div>
      
    </Category>
    <Category title="电影">
      <video controls slot='mid' src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- <template v-slot:footer> -->
      <template slot="footer">
        <div class="foot"> 
          <a href="http://www.4399.com">经典</a>
          <a href="http://www.4399.com">热门</a>
          <a href="http://www.4399.com">推荐</a>
        </div>
      <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  

  export default {
    name: "App",
    components:{Category},
    data() {
      return {
        foods:['鸡腿','丸子','回锅肉','小龙虾'],
        games:['黑悟空','LOL','gta','死亡搁浅'],
        films:['肖申克','神秘第六感','飞跃疯人院','树先生']
      }
    },
  };
</script>

<style lang="css">
  .container{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 200px;
  }
  img{
        width: 100%;
  }
  .foot{
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
  }
  h4{
    text-align: center;
  }
  
</style>



