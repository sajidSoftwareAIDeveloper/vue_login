<script setup>
   import selectOption from '@/views/selectOption.vue';
   import button_s from '@/views/button_s.vue';
   import router from '@/router';
   import { ref } from 'vue';
   import { store } from '@/views/store';

    const data=ref(null);

    function buttonHandle(){
        if(data.value!=null){
            store.setImage(data.value);
            sessionStorage.setItem('img3',JSON.stringify(data.value));
            router.push('/final');
        }
    }
    function storeImageHandle(val){
        data.value=val;
    }
</script>

<template>
    <div class="body">
        <div>
            <selectOption 
            :images="[
            'https://images.pexels.com/photos/4482677/pexels-photo-4482677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            ]"
            @update-data="storeImageHandle" 
            />
            <div style="margin-top: 50px;">
                <button_s :action-handle="buttonHandle" :action-name="'next'"/>
             </div>
        </div>
    </div>

</template>



<style scoped>

</style>