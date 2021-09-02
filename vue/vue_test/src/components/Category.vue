<template>
    <div class="category">
        <h3>{{title}}列表</h3>
        <slot :games='games'>我是默认的内容</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['黑悟空','LOL','gta','死亡搁浅'],
            }
        },
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

