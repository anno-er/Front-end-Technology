<template>
  <div class="person">
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
      <input v-model="name" type="text" placeholder="请输入名字">
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>

  </div>
</template>

<script>
import { nanoid } from 'nanoid'
    export default {
        name:'Person',
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
        },
        data() {
            return {
                name:''
            }
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.name = ''
                this.$store.commit('ADD_PERSON',personObj)
            }
        }

    }
</script>

<style scoped>
    .person{
        margin: 100px auto;
        width: 320px;
        box-shadow: 5px 5px 5px black;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 10px;
    }
</style>