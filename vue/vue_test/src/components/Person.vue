<template>
  <div class="person">
      <h1>人员列表</h1>
      <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
      <h3>列表中第段内容是：{{firstPersonName}}</h3>
      <input v-model="name" type="text" placeholder="请输入名字">
      <button @click="add">添加</button>
      <button @click="addWang">添加姓王</button>
      <button @click="addPersonServer">添加社会语录</button>
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
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPersonName(){
                return this.$store.getters['personAbout/firstPersonName']
            }
        },
        data() {
            return {
                name:'',
            }
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                this.name = ''
                this.$store.commit('personAbout/ADD_PERSON',personObj)
            },
            addWang(){
                const personObj = {id:nanoid(),name:this.name}
                this.name = ''
                this.$store.dispatch('personAbout/addPersonWang',personObj)
            },
            addPersonServer(){
                this.$store.dispatch('personAbout/addPersonServer')
            }
        },
        mounted(){
            // console.log(this.$store)
        }

    }
</script>

<style scoped>
    .person{
        margin: 100px auto;
        width: 500px;
        box-shadow: 5px 5px 5px black;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 10px;
    }
</style>