<script setup>
    import router from '@/router';
    import { store } from '@/views/store';
    import { onMounted, ref } from 'vue';

    const session=ref(null);
    function profileHandle(){
        router.push('/profile');
    }
    onMounted(()=>{
        session.value=JSON.parse(sessionStorage.getItem('img1'));
    });

</script>

<template>
    <div class="header_body">
        <!-- {{ store.image.length==0 ?router.push('/'):'' }} -->
            <div class="logo_button">
                <button>
                    <img src="../../public/vml_logo.png" alt="no" class="logo"/>
                </button>
            </div>
            <div class="profile_img">
                <img :src="session" alt="no" class="profile"  @click="profileHandle"/>
            </div>
    </div>
</template>



<style scoped>


    .profile_img {
        margin-right: 50px;
    }
    .logo_button {
        margin-left: 50px;
    }
    .header_body{
        display: flex;
        height:80px;
        width:100%;
        background-color: rgb(132, 36, 105);
        padding-top: 22px;
        justify-content: space-between;
    }


    .logo{
        width: 60px;
        height: 40px;
        border-radius: 2px;
        cursor: pointer;
        border-radius: 5px;
    }
    .profile{
        border-radius: 50%;
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
    @media only screen and (max-width: 250px){

        .header_body{
            width: 100%;
        }
        
        .logo_button{
            margin-left: 10px;
        }
        .profile_img{
            margin-right: 10px;
        }
    }

</style>