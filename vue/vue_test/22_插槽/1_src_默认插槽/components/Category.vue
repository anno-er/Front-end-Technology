<template>
    <div class="category">
        <h3>{{title}}列表</h3>
        <!-- <ul v-show="title !== '美食'">
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul> -->
        <!-- <img v-show="title == '美食'" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""> -->
        <!-- 定义一个插槽，等待组件的使用者进行填充 -->
        <slot>默认值，使用者没有传递具体结构时出现</slot>

    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
    }  
    
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orangered;
    }
    
</style>

