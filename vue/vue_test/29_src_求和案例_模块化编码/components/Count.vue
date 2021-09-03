<template>
    <div class="container">
        <h2>当前求和为{{sum}}</h2>
        <h2>当前求和的10倍为{{bigSum}}</h2>
        <h2>我在{{school}}，学习{{subject}}</h2>
        <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1
            }
        },
        computed:{
             //利用mapState映射生成计算属性，从state中读取数据（数组写法）
            ...mapState('countAbout',['sum','school','subject']),
            ...mapState('personAbout',['personList']),


            //利用mapGetters映射生成计算属性，从Getter中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'}),
            //利用mapGetters映射生成计算属性，从Getter中读取数据（数组写法）
            ...mapGetters('countAbout',['bigSum'])
                
        },
        methods: {
            //借组mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),

            //借组mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
            // ...mapMutations(['JIA','JIAN']),


            //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions（对象写法）
            ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions（数组写法）
            //...mapActions(['jiaOdd','jiaWait'])
        },
        mounted(){
        //    console.log(this.$store)
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



