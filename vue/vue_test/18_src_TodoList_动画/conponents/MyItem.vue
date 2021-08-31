<template>
  <transition name="todo" appear leave-active-class="animate__hinge">
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
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          ref="inputTitie"
          v-show="todo.isEdit"
          type="text"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="handleEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import pubsub from "pubsub-js";
import 'animate.css'
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
        pubsub.publish("deleteTodoId", id); //消息订阅与发布
      }
    },
    //编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        console.log("todo 身上没有edit");
        this.$set(todo, "isEdit", true);
      }

      /* setTimeout(() => {
        this.$refs.inputTitie.focus()
      }, 200); */

      // $nextTick所指定的回调会在Dom节点更新完毕之后再执行
      this.$nextTick(function () {
        this.$refs.inputTitie.focus();
      });
    },
    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (e.target.value.trim()) {
        this.$bus.$emit("updataTodo", todo.id, e.target.value);
      } else alert("输入不能为空");
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

.todo-enter-active {
  animation: contact 0.5s;
}

/* .todo-leave-active {
  animation: contact 0.5s reverse;
} */

@keyframes contact {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>