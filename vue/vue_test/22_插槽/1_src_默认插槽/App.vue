<template>
  <div class="container">
    <Category title="美食"> 
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category title="游戏" >
      <ul v-show="title !== '美食'">
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
  
</style>



