<template>
    <div class="container">
        <h2>当前求和为{{sum}}</h2>
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
    export default {
        name:'Count',
        data() {
            return {
                sum:0,
                n:1
            }
        },
        methods: {
            increment(){
                this.sum += this.n
            },
            decrement(){
                this.sum -= this.n
            },
            incrementOdd(){
                if(this.sum % 2){
                    this.sum += this.n
                }
            },
            incrementWait(){
                setTimeout(() => {
                    this.sum += this.n
                }, 500);
            },
        },
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



