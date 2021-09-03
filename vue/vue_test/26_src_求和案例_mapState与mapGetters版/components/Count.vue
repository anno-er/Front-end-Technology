<template>
    <div class="container">
        <h2>当前求和为{{sum}}</h2>
        <h2>当前求和的10倍为{{school}}</h2>
        <h2>我在{{school}}，学习{{subject}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1
            }
        },
        computed:{
            //靠程序员自定义计算属性
            /* sum(){
                return this.$store.state.sum
            },
            school(){
                return this.$store.state.school
            },
            subject(){
                return this.$store.state.subject
            }, */

            //利用mapState映射生成计算属性，从state中读取数据（对象写法）
            //...mapState({sum:'sum',school:'school',subject:'subject'}),

             //利用mapState映射生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','school','subject']),


            /* bigSum(){
                return this.$store.getters.bigSum
            }, */

            //利用mapGetters映射生成计算属性，从Getter中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'}),
            //利用mapGetters映射生成计算属性，从Getter中读取数据（数组写法）
            ...mapGetters(['bigSum'])
                
        },
        methods: {
            increment(){
                this.$store.dispatch('jia',this.n)
            },
            decrement(){
                this.$store.commit('JIAN',this.n) //可以直接commit
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.n)
            },
        },
        mounted(){
            const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        }
    }  
</script>

<style lang="css">
    button{
        margin-left: 5px;
    }
    .container{
        margin: 100px auto;
        width: 320px;
        box-shadow: 5px 5px 5px black;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 10px;
    }
</style>



