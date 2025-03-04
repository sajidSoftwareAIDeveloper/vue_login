<script setup>

const {actionName,actionHandle}=defineProps({
                actionName:String,
                actionHandle:Function,
       });
    function action(event){
        event.preventDefault();
        actionHandle();
    }

</script>

<template>
     <td>
        <!-- <button @click="$emit('submit')"> {{actionName}} </button> -->
        <button @click="action"> {{actionName}} </button>
    </td>
</template>

<style scoped>

   button {
    margin: 5px;
    font-size: 30px;
    border-radius: 30px;
    background-color: rgb(252, 178, 244);
    padding-inline: 20px;
    cursor: pointer;
    margin-left: 30px;
    }
    button:hover {
    background-color: red;
    }
    button:active {
    background-color: aqua;
    }

</style>