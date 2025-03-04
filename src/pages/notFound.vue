<script setup>
import router from '@/router';
import Button_s from '@/views/button_s.vue';
import { onMounted } from 'vue';



    // onMounted({

    // });

    function gotologin(){
        router.push('/');
    }
</script>

<template>
    <div class="error">
        <h1>page not found</h1>
        <Button_s :action-handle="gotologin" :action-name="'home'"/>
    </div>
</template>

<style lang="css" scoped>
    h1{
        color: rgb(255, 252, 252);
        font-size: 50px;
    }
    .error{
        justify-items: center;
        margin-top: 100px;
    }

</style>