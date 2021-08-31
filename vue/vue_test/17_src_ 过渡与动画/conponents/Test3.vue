<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- <h1 v-show="isShow" class="go">内容</h1> -->
        <transition-group :appear="true"
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__bounceOutUp"
        >
            <h1 v-show="isShow" key="1">内容</h1>
            
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css'
    export default {
        name:'Test',
        data() {
            return {
                isShow:true
            }
        },
}
</script>

<style scoped>
    h1{
        background-color: tomato;
        height: 50px;
        line-height: 50px;
        /* transition: 0.5s ; */
    }
    div{
        width: 500px;
    }




    
 

    
</style>