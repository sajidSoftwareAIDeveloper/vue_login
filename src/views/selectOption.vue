<script setup>
   import { ref,defineEmits} from 'vue';

    const {images}=defineProps({
        images:Array,
    });
   const isClick=ref(undefined);
   const emit=defineEmits(['update-data']);

   function imageHandle(img,index){
        isClick.value=index;
       // console.log("radio data:: ",img);
        emit('update-data',img);
   }
   // send data child to parent 

</script>

<template>
    <div class="select">
       <div v-for="(image,index) in images" :key="index" class="show_images">
            <img 
                :src=" `${image}`" 
                alt="no" 
                :class="isClick==index?'active_image':'image'"
                @click="imageHandle(image,index)"
             /> 
       </div>
    </div>
</template>



<style scoped>
   
    .image{
        height: 200px;
        width:200px;
        cursor: pointer;
    }
    .active_image{
        height: 200px;
        width:200px;
        cursor: pointer;
        border: 10px solid red;
        
    }

    .select{
        display: flex;
        margin-inline: 5px;
    }
    .show_images{
        margin-inline:10px;
    }
    @media only screen and (max-width: 900px){
        .select{
            display: grid;
            grid-template-columns: auto auto;
            row-gap: 10px;
        }
    }
    @media only screen and (max-width: 500px){
        .select{
            display: grid;
            grid-template-columns: auto;
            row-gap: 10px;
        }
    }

</style>