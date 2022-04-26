<template>
    <div class="backg">
        <div class='glass'>
            STAR
        </div>
    </div>
</template>

<script>
export default {
    name:'MatGlass'
}
</script>

<style scoped>
    .backg{
        height: 88vh;
        background-image:url(.././assets/star.jpg);
        /* background-attachment: fixed; */
        /* background-size: cover; */
        background-repeat: no-repeat; 
        overflow: hidden;
    }
    .backg .glass{
        height: 400px;
        width: 520px;
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        margin: 300px auto;

        text-align: center;
        font-size: 50px;
        line-height: 400px;
        letter-spacing: 20px;
        color: azure;
    }

    .backg .glass:hover{
        height: 410px;
        line-height: 410px;
        width: 530px;
        font-size: 53px;
        box-shadow: 3px 3px 5px 3px rgba(255, 255, 255, 0.2);
        transition: all 0.2s;

    }



</style>