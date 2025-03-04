<script setup>
    import {ref} from 'vue'
    import {store}  from './store'
    const value=ref();

    const{input_type,input_id,input_plh}=defineProps({
        input_type:String,
        input_id:String,
        input_plh:String,
    });

    function saveData(val){

        if(val!=undefined){
            // switch(input_id){

            //     case f_name || l_name: {
            //             if(!/^[A-Za-z]+$/.test(val)){ value.value=val.split(0,length(val-1)) }
            //             if(val.length<=5 || val.length>=20){ }
            //         }
            //     case phone:
            //         return{}
            //     case otp:
            //         return {}
            //     case email :
            //         return {}
            //     case password :
            //         return {}
            //     case v_password:
            //         return {}
            //     default :
            //     return {}
            // }
            
            store.setData({input_id:value.value});
        }
    //    console.log(store.data);
    }

</script>

<template>
    <div>
        <input 
            :type="input_type"
            :id="input_id" 
            :placeholder="input_plh"
            v-model="value"
            @change="()=>saveData(value.value)"
        />
    </div>
</template>

<style lang="css" scoped>
     /* input {
        border-radius: 10px;
        padding-inline: 10px;
        margin-top: 9px;
        width: 300px;
        height: 30px;
        font-size: 20px;
        background-color: rgb(241, 230, 190);
    } */
</style>