
/* eslint-disable vue/multi-word-component-names */
<script setup>
    // import {store}  from './store'
    import { ref ,onMounted} from 'vue';
    import bothFileCamera from './bothFileCamera.vue';
    import formPage from './formPage.vue';
    import button_s from './button_s.vue';

  //  const router=useRouter();
    onMounted(()=>{
      // sessionStorage.removeItem('user');
      // sessionStorage.removeItem('images');
      sessionStorage.clear();
    })
    const formAction=ref(0);
    const fileAction=ref(0);

    function formSubmitHandle(){
      formAction.value+=1;
      fileAction.value+=1;

      // if(fromCameraIsValid.value=='ok' && fromFormIsValid.value=='ok'){
      //   // router.push('/finalPage');
      //   router.push('/first');
      // }
      // console.log('+++++++++++++++++++');
    }

   
</script>

<!-- <script setup lang="js"></script> -->
<template>
    <div class="show_body">
        <formPage :triggerFormPageAction="formAction" />
        <bothFileCamera :triggerBothFileCamera="fileAction"/>
        <button_s :actionName="'submit'" :actionHandle="formSubmitHandle"/>
    </div>
</template>

<style scoped>
    .show_body{
      justify-items: center;
    }
</style>