<script setup>
    import { useRoute } from 'vue-router';
    import HeaderPage from './pages/headerPage.vue';

    const route=useRoute();
</script>

<template>
    <div class="body">
        <div v-if="route.name!='show' && route.name!='notFound'">
            <HeaderPage/>
        </div>
        <div class="rout">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="css">
    body{
        /* justify-items: center; */
        padding-inline: 30px;
        /* background-image: url(https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-1200-80.jpg); */
        background-color: rgb(87, 32, 32);
        width: 100%;
        height: 92vh;
    }
    .rout{
        margin-top:30px;
        justify-items: center;
        /* overflow: hidden; */
    }
</style>

