<!-- <script setup>
    import {ref}  from 'vue'
    // import button_s from './button_s.vue';
    // import { store } from './store';
  
    const fileInput = ref();
    const imagePreview = ref();


function openHandel(event){
    const file = event.target.files[0];
    if (file) {
      imagePreview.value = URL.createObjectURL(file);
    //  store.setData({'image':imagePreview.value});
    }
  }

  function fileHandle(){
      fileInput.value.click();
    }

</script>

<template>
    <div>
       <button @click="fileHandle"><img class="file" src="../../public/fileIcon.png"/></button>
        <input
            type="file"
            accept="image/*"
            required
            capture="environment"
            ref="fileInput"
            @change="openHandel"
            style="display: none;"
        />
        <div v-if="imagePreview">
            <img :src="imagePreview" alt="Captured Image" class="image" />
        </div>


    </div>
</template>

<style lang="css" scoped>
  .image{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
    
  .file{
    width: 15px;
    height: 15px;
    border-radius: 2px;
    margin: -5px;
  }
  button{
    cursor: pointer;
    padding: -20px;
  }
</style>
 -->
