<script setup>
    import button_s from '@/views/button_s.vue'
    import selectOption from '@/views/selectOption.vue';
    import { store } from '@/views/store';
    import router from '@/router';
    import { ref } from 'vue';

    const data=ref(null);

    const optionImages=[
        'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ];

    function buttonHandle(){
       // console.log('data',data.value);
        if(data.value!=null){
            store.setImage(data.value);
            sessionStorage.setItem('img2',JSON.stringify(data.value));
            router.push('/secound');
        }
    }
    function storeImageHandle(val){
      //  console.log('val',val);
        data.value=val;
    }

</script>

<template>
    <div class="firstPage">
        <selectOption 
            :images="optionImages"
            @update-data="storeImageHandle" 
        />
        <div style="margin-top: 50px;">
            <button_s :action-handle="buttonHandle" :action-name="'next'"/>
         </div>
    </div>
</template>

<style scoped>

</style>