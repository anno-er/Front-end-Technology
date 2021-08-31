<template>
  <li>
    <label>
      <!-- <input type="checkbox" :checked ='todo.done' @click="handleCheck(todo.id)"/> -->
      <!-- 如下代码也能实现功能，但由于修改了prop传入了数据，虽然存在与对象中，检测不多，也不推荐使用 -->
      <!-- <input type="checkbox" v-model=" todo.done"/> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //接收todo对象
  props: ["todo"],
  methods: {
    // 勾选 or 取消勾选
    handleCheck(id) {
      //通知APP将对应的todo对象的Done值取反
      //this.checkTodo(id)
      this.$bus.$emit("checkTodo", id); 
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        //this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo',id) //事件总线
        pubsub.publish('deleteTodoId',id) //消息订阅与发布
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>