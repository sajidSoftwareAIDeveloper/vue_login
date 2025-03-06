 <!-- <script setup>
  import { ref} from "vue";
  
  const video = ref(null);
  const canvas = ref(null);
  const image = ref(null);
  const isOpenCamera=ref(false);
  let stream = null;
  
   async  function cameraHandle(event){
      event.preventDefault();

     
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.value.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
      
      if(stream!=null){
        isOpenCamera.value=true;
      }
    }


  function captureImage() {

    isOpenCamera.value=false;
    const context = canvas.value.getContext("2d");
    canvas.value.width = video.value.videoWidth;
    canvas.value.height = video.value.videoHeight;
    context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    image.value = canvas.value.toDataURL("image/png");

   if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
  }
  </script>

<template>
  <div>

    <div>
      <button @click="cameraHandle"><img class="camera" src="../../public/camera.png"/></button>
    </div>

    <Teleport to="body"  >
      <div v-show="isOpenCamera" class="popup" >
        <video ref="video" autoplay style="width: 100%; max-height: 300px;" />
        <button @click="captureImage" class="clickPhoto"></button>
      </div>
    </Teleport>
    
    <canvas ref="canvas" style="display: none;"></canvas>
   <br>
    <div v-if="image">
      <img :src="image" alt="Captured Image"  class="show_image"/>
    </div>
  </div>
</template>

<style lang="css" scoped>

    .popup{
      position: fixed;
      justify-content: center;
      justify-items: center;
      width:100%;
      height:100%;
      top:30px;
      background-color: rgba(135, 151, 143, 0.34);
    }
    
    .show_image{
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }

    .camera{
    width: 15px;
    height: 15px;
    border-radius: 2px;
    margin: -5px;
  }

  .clickPhoto{
    display: flex;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: rgb(255, 205, 227);
    justify-self: center;
    cursor: pointer;
    margin-top: -6px;
  }
</style>
   -->