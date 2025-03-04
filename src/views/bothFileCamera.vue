<script setup>
  import { ref,watch} from "vue";
  import { useRouter } from 'vue-router';
  import {store}  from './store'

  
  const router=useRouter();

  const video = ref(null);
  const canvas = ref(null);
  const image = ref(null);
  const isOpenCamera=ref(false);
  let stream = null;

  const isValid = ref(false);
  const fileInput=ref();

  const {triggerBothFileCamera}=defineProps({
    triggerBothFileCamera:Number,
    });
    watch(
        ()=>triggerBothFileCamera,
        (newValue)=>{
          //console.log(newValue);
            if(newValue>0){
                if(image.value!=null){
                  isValid.value=false;
                //  store.setIsSubmit(true,false);
                 if(store.data.firstName!=null){
                    store.setImage(image.value);
                    sessionStorage.setItem('img1',JSON.stringify(image.value));
                    router.push('/first');
                 }
                }
                else{
                  isValid.value=true;
                }
            }
        }
    )
   async  function cameraHandle(event){
      event.preventDefault();
      // isOpenCamera.value=true;

      
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

    function closedCameraHandle(){
        isOpenCamera.value=false;
      if (stream) {
            stream.getTracks().forEach((track) => track.stop());
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


  function openHandel(event){
    const file = event.target.files[0];
    if (file) {
      image.value = URL.createObjectURL(file);
    //  store.setData({'image':imagePreview.value});
      isValid.value=false;
    }
  }

  function fileHandle(event){
        event.preventDefault();
        fileInput.value.click();
    }

  </script>

<template>
  <div class="main_class">
    
   <div>
        <h2 class="heading"> select image :</h2>
        <h1 v-if="isValid">*</h1>
    </div>
        <div>
            <button @click="cameraHandle"><img class="camera" src="../../public/camera.png"/></button>
        </div>

        <Teleport to="body" >
        <div v-show="isOpenCamera" class="popup" >
            <video ref="video" autoplay class="video_style"/>
            <button class="cut_camera" @click="closedCameraHandle">X</button>
            <button @click="captureImage" class="clickPhoto"></button>
        </div>
        </Teleport>
        
        <canvas ref="canvas" style="display: none;"></canvas>     

        <div style="margin-inline:10px">
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
        </div>
    </div>

    <div v-if="image">
        <img :src="image" alt="Captured Image"  class="show_image"/>
    </div>
</template>

<style lang="css" scoped>

    .popup{
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      display: grid;
      grid-template-columns: 1;
      position: fixed;
      justify-content: center;
      justify-items: center;
      width:100%;
      height:100%;
      background-color: brown;
      column-gap: 0px;
    }
    .cut_camera{
      color: red;
      height:30px;
      width: 30px;
      font-size: 25px;
      cursor: pointer;
      margin-left: 370px;
      margin-top: 9px;
      position: inherit;
    }
    .video_style{
      width: 400px; 
      height: 300px;
      border: 10px solid rgb(189, 186, 186);
    }
    
    .show_image{
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }

    .file, .camera{
    width: 20px;
    height: 20px;
    border-radius: 2px;
    cursor: pointer;
  }

  .clickPhoto{
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: rgb(255, 205, 227);
    justify-self: center;
    cursor: pointer;
    position: inherit;
  }

  .clickPhoto:hover{
    background-color: rgb(154, 0, 69);
    border-color: green;
  }
  .main_class{
   display:flex;
   margin-top:20px;
   margin-left:-40px;
  }
  .heading{
    margin-top:-11px;
    margin-right:10px;
    margin-left: 60px;
    color:white;
    font-size:40px;

  }
  h1{
    color: red;
    margin-top: -75px;
    font-size: 50px;
    margin-left: 30px;
  }

</style>
  