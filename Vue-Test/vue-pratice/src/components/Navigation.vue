<template>
  <div class="container">
    <div class="navigation">
      <ul>
        <li v-for='(subnav,index) in subnavs' :key='index' :class="checkedID == index ?'active':''" @click="Checked($event,index)">
          <a href="#">
            <span>
              <i :class="subnav.iClass" ></i>
            </span>
            <span class="text">{{subnav.name}}</span>
          </a>
          
        </li>

        <!-- <li :class="isActive1 ? 'active':''" @click='activeLink1'>
          <a href="#">
            <span>
              <i class="icon iconfont icon-home"></i>
            </span>
            <span class="text">Home</span>
          </a>
        </li>
        <li :class="isActive2 ? 'active':''" @click='activeLink2'>
          <a href="#"> 
            <span class="icon">
              <i class="icon iconfont icon-profile"></i>
            </span>
            <span class="text">Profile</span>
          </a>
        </li>
        <li :class="isActive3 ? 'active':''" @click='activeLink3'>
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-xiaoxi"></i>
            </span>
            <span class="text">Message</span>
          </a>
        </li>
        <li :class="isActive4 ? 'active':''" @click='activeLink4'>
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-photos"></i>
            </span>
            <span class="text">Photos</span>
          </a>
        </li>
        <li :class="isActive5 ? 'active':''" @click='activeLink5'>
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-Setting"></i>
            </span>
            <span class="text">Settings</span>
          </a>
        </li> -->
        <!-- <div class="indicator"></div> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:'Navigation',
    data(){
        return{
            checkedID:-1,
            subnavs:[
              {id:1,name:'Home',iClass:"icon iconfont icon-home"},
              {id:2,name:'Profile',iClass:"icon iconfont icon-profile"},
              {id:3,name:'Message',iClass:"icon iconfont icon-xiaoxi"},
              {id:4,name:'Photos',iClass:"icon iconfont icon-photos"},
              {id:5,name:'Settings',iClass:"icon iconfont icon-Setting"},
            ],
            /* isActive1:true,
            isActive2:false,
            isActive3:false,
            isActive4:false,
            isActive5:false, */
        }
    },
    methods:{
        /* activeLink1(){
           this.isActive1 = !this.isActive1
        },
        activeLink2(){
           this.isActive2 = !this.isActive2
        },
        activeLink3(){
           this.isActive3 = !this.isActive3
        },
        activeLink4(){
           this.isActive4 = !this.isActive4
        },
        activeLink5(){
           this.isActive5 = !this.isActive5
        } */
        Checked(event,index){
          if(this.checkedID != index){
            this.checkedID = index
          }else{
            this.checkedID = -1
          }
          
        }

    }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;   
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  background-color: #222327;
}

a {
  color: black;
  text-decoration: none;
}

.navigation {
  width: 400px;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.navigation ul {
  position: relative;
  display: flex;
  width: 350px;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 2;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70px;
  text-align: center;
  font-size: 15px;
}

.navigation ul li a i{
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 2em;
  color: #222327;
  text-align: center;
  transition: 0.5s;
}

.navigation ul li.active a i{
    transform: translateY(-35px);
    width: 70px;
    height: 70px;
    background-color:rgb(0, 255, 157);
    border-radius: 50%;
}

.navigation ul li a .text{
    position: absolute;
    color: #222327 ;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 0.01em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
}

.navigation ul li.active a .text{
    opacity: 1;
    transform: translateY(10px);
}

.indicator{
    position:absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background-color: aquamarine;
    border-radius: 50%;
    border: 6px solid #222327;
}

.indicator::before{
    content: '';
    position: absolute;
    top:50%;
    left:-22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 #222327;
}

.indicator::after{
    content: '';
    position: absolute;
    top:50%;
    right:-22px;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 #222327;
}
</style>


/*   
总结：
    v-for 的用法 
    
    v-for 绑定函数 绑定样式  index的使用（index表示当前元素在父元素中的位置）
    
    $event(获取操作元素及其相关元素)
      e.target 是你当前点击的元素
      e.currentTarget 是你绑定事件的元素
      #获得点击元素的前一个元素
      e.currentTarget.previousElementSibling.innerHTML
      #获得点击元素的第一个子元素
      e.currentTarget.firstElementChild
      # 获得点击元素的下一个元素
      e.currentTarget.nextElementSibling
      # 获得点击元素中id为string的元素
      e.currentTarget.getElementById("string")
      # 获得点击元素的string属性
      e.currentTarget.getAttributeNode('string')
      # 获得点击元素的父级元素
      e.currentTarget.parentElement
      # 获得点击元素的前一个元素的第一个子元素的HTML值
      e.currentTarget.previousElementSibling.firstElementChild.innerHTML  
*/




