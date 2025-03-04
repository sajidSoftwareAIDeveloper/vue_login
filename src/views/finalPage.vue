<script setup>
    import { store } from './store';
</script>

<template>
    <div class="final">
        <h1> submitted successfully </h1>
        <!-- <div v-for="item in store.data">
            {{ item.value }}
        </div> -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<style lang="css" scoped>
    h1{
        color: red;
    }
     .final{
        height: 800px;
        width: auto;
        justify-items: center;
        justify-content:center ;
        padding-top: 30px;
        background-image: url(https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg);
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
    }


</style>