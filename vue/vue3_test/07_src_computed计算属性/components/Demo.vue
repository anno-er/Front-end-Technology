<template>
  <h1>一个人的信息</h1>
  姓: <input v-model="person.firstName" type="text"> <br>
  名: <input v-model="person.lastName" type="text">
  <hr>
  <h1>全名{{person.fullName}}</h1>
  <hr>
  <h1>全名：<input type="text" v-model="person.fullName"></h1>
  <slot></slot>
</template>

<script>
    import { reactive,computed} from "vue";
    export default {
    name: "Demo",
    //vue2中的计算属性
    /* computed:{
        fullName(){
            return this.person.firstName + '-' + this.person.lastName
        }
    }, */

    setup(props, context) {
        let person = reactive({
            firstName:'张',
            lastName:'三'
        });

        //Vue3中的计算属性(简写形式，没有考虑计算属性被修改的情况)
        /* person.fullName = computed(()=>{
            return person.firstName + '-' + person.lastName
        }) */

        // Vue3中的计算属性(完整写法，考虑计算属性被读写的情况)
        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.lastName
            },
            set(value){
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })
        //返回数据、方法
        return {
            person,
        };
    },
    };
</script>


