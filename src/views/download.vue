
<script setup>
import { ref } from 'vue';
// import button_s from './button_s.vue';

    const {url}=defineProps({
        url:String
    });

const base64url=ref();

    // convert into Base64
async function convertImageToBase64(imageUrl) {
    try {
        // Fetch the image
        const response = await fetch(imageUrl);

        // Ensure the response is OK
        if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        // Convert the response into a Blob
        const blob = await response.blob();

        // Create a FileReader to convert the Blob to Base64
        return new Promise((resolve, reject) => {
        const reader = new FileReader();

        // On successful read, resolve the Base64 string
        reader.onloadend = () => resolve(reader.result);

        // On error, reject the promise
        reader.onerror = () => reject("Error reading blob as Base64");

        // Start reading the Blob as a Base64 string
        reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error("Error converting image to Base64:", error);
    }
}


async function downloadImage(){

    convertImageToBase64(url).then((base64String) => {
        base64url.value=base64String;
    });

    // const extension= url.split('.').pop();
    setTimeout(()=>{
        const link = document.createElement('a');
        link.href =base64url.value;
        let extension=base64url.value.split(';')[0].split('/').pop();
       // console.log(extension);
        link.download = 'image.'+extension;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },200)
}



</script>

<template>
    <!-- <Button_s :action-handle="downloadImage" :action-name="'download'"/> -->

    <a :href="base64url" download><img src="../../public/download.png" alt="no" class="download_icon" @click="downloadImage"></a>

    <!-- <a :href="base64url" download @click="downloadImage"> download images </a> -->


    <!-- <img :src="base64url" alt="no"> -->

</template>

<style scoped>
    .download_icon{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        background-color: aqua;
    }
    .download_icon:active{
        background-color: red;
    }
    .download_icon:hover{
        background-color: rgb(19, 243, 82);
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>