<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{ StudentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现子组件给父组件传递数据 -->
    <!-- <Student v-on:myClick = 'getStudentName'/> -->
    <!-- <Student @myClick = 'getStudentName'/>  上面的简写  -->
    <!-- <Student @myClick="getStudentName" @demo="m1" /> -->

    <!-- 通过父组件的refs给子组件绑定一个自定义事件实现子组件给父组件传递数据 -->
    <!-- 这种方式更灵活 -->
    <!-- <Student ref="student"></Student> -->

	<!-- 利用native通过父元素为组件绑定原生事件 -->
    <Student ref="student" @click.native='show'></Student>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊",
      StudentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App接收到了学校名：", name);
    },
    /* getStudentName(name, ...params) {
      console.log("App接收到了学生名：", name, params);
      this.StudentName = name;
    }, */
    m1() {
      console.log("demo事件被触发了");
    },
	show(){
		alert(123)
	}
  },
  mounted() {
    this.$refs.student.$once('myClick',this.getStudentName) //绑定自定义事件（一次性）

    /* this.$refs.student.$on("myClick", function(name, ...params){
      console.log("App接收到了学生名：", name, params);
      this.StudentName = name;
      console.log(this); //这个this指向的不是App,而是触发事件的组价对象:Student
    }); */

	/* this.$refs.student.$on("myClick", (name, ...params)=>{
      console.log("App接收到了学生名：", name, params);
      this.StudentName = name;
      console.log(this); //因为箭头函数，这个this指向的是App
    }); */
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
