<script setup>
    import download from '@/views/download.vue';
    // import { store } from '@/views/store';
    import { ref,onMounted } from 'vue';
    const session=ref([null,null]);

    onMounted(()=>{
        session.value[0]=JSON.parse(sessionStorage.getItem('img2'));
        session.value[1]=JSON.parse(sessionStorage.getItem('img3'));
    });
</script>

<template>
    <div style="margin: 20px;">
        <h1>final result </h1>

        <div class="images">

            <div class="icon_image">
                <img :src="session[0]" alt="no" class="image"/>
               <div class="download1"><download :url="session[0]"/> </div> 
            </div>

            <div class="icon_image">
                <img :src="session[1]" alt="no" class="image"/>
                <div class="download2">
                     <download :url="session[1]"/>
               </div> 
            </div>
        </div>
    </div>
</template>



<style scoped>
     .image{
        height: 300px;
        width: 300px;
        margin: 20px;
    }
    h1{
        color: aqua;
        font-size: 30px;
        margin-top: 10px;
        /* margin-left: -20px; */

    }
    .images{
        display: flex;
    }
    .download1, .download2{
         margin-left: -40px;
         margin-top:20px;
    }

    .icon_image{
        display: flex;
    }

    .image:hover{
       border: 5px dotted ghostwhite;
    }

    @media only screen and (max-width: 700px){
        .images{
            display: grid;
            grid-template-columns: auto;
            row-gap: 10px;
        }
    }
    
</style>