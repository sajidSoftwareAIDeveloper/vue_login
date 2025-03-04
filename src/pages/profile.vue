<script setup>
    import { store } from '@/views/store';
    import { ref ,onMounted } from 'vue';


    const session=ref();
    onMounted(()=>{
        session.value=JSON.parse(sessionStorage.getItem('user'));
    });

</script>
<template>
    <div class="profile">
        <h1> welcome to profile </h1>
        <!-- <div v-if="store.data.firstName!=null">
            <div>name :: {{ store.data.firstName +" "+ store.data.lastName}}</div>
            <div>phone :: {{ store.data.phone}}</div>
            <div>email :: {{ store.data.email}}</div>
            <div>password :: {{ store.data.password}}</div>
         </div> -->

         <div v-if="session!=undefined">
            <div>name :: {{ session.firstName +" "+ session.lastName}}</div>
            <div>phone :: {{ session.phone}}</div>
            <div>email :: {{ session.email}}</div>
            <div>password :: {{ session.password}}</div>
         </div>

     </div>
</template>

<style scoped>
    .profile{
        justify-content: center;
        padding: 10%;
        color: rgb(230, 225, 225);
        font-size: 30px;
    }
</style>