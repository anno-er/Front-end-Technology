<template>
  <div>
    <div class="navigation">
      <ul>
        <li class="list">
          <a href="#">
            <span>
              <i class="icon iconfont icon-home"></i>
            </span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-profile"></i>
            </span>
            <span class="text">Profile</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-xiaoxi"></i>
            </span>
            <span class="text">Message</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-photos"></i>
            </span>
            <span class="text">Photos</span>
          </a>
        </li>
        <li class="list">
          <a href="#">
            <span class="icon">
              <i class="icon iconfont icon-Setting"></i>
            </span>
            <span class="text">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  display: flex;
  width: 350px;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-size: 15px;
}

.navigation ul li a i{
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    color: #222327;
}
</style>

