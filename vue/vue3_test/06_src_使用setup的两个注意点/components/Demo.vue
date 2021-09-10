<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发Demo组件的hello事件</button> <br>
  <slot></slot>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name: "Demo",
        props:['msg','school'],
        emits:['hello'],
        beforeCreate() {
            console.log('---beforecreate---')
        },
        setup(props,context) {
            // console.log('---setup---',this,props)
            console.log('---setup---',context.attrs) //相当于Vue2中的$attrs 
            console.log('---setup---',context.emit) //相当于Vue2中的$emit,触发自定义事件
            console.log('---setup---',context.slots)  //收到的插槽内容，相当于this.$slots


            let person = reactive({
            name: "张三",
            age: 18,
            });

            //方法
            function test(){
                context.emit('hello',666)
            }

            //返回数据、方法
            return {
                test,
                person,
            };
        },
    };
</script>


