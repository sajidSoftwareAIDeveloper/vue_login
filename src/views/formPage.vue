<script setup>
    import {reactive,watch,} from 'vue'
    import {store}  from './store'

    const value=reactive({
        firstName:'',
        lastName:'',
        phone:'',
        email:'',
        password:'',
        isValid:[undefined,undefined,undefined,undefined,undefined],
    });
   

    const {triggerFormPageAction}=defineProps({
        triggerFormPageAction:Number,
        
    });

    watch(
        ()=>triggerFormPageAction,
        (newValue)=>{
            if(newValue>0){
                value.isValid=value.isValid.map(item=>item==undefined?0:item)           
               if(value.isValid.reduce((count, item) => count + (item === 1 ? 1 : 0), 0)==5){
                   // store.setIsSubmit(false,true);
                    store.setData(value)
                    sessionStorage.setItem('user',JSON.stringify(value));
                  //  console.log('data',store.data);
                }
            }
        }
    )

    function firstNameHandle(){
        value.isValid[0]=undefined;
        if(!/^[A-Za-z]+$/.test(value.firstName) || value.firstName.length>=30 ){ value.firstName=value.firstName.slice(0,-1)}
    }
    function lastNameHandle(){
        value.isValid[1]=undefined;
        if(!/^[A-Za-z]+$/.test(value.lastName || value.lastName.length>=30) ){ value.lastName=value.lastName.slice(0,-1) }
    }
    function phoneHandle(){
        value.isValid[2]=undefined;
        let ascii=value.phone.charCodeAt(value.phone.length-1);
        if(value.phone.length>10 ||ascii>=58 || ascii<=47 ){ value.phone=value.phone.slice(0,-1) }
    }
    function emailHandle(){
        value.isValid[3]=undefined;

    }
    function passwordHandle(){
        value.isValid[4]=undefined;
        if(value.password.length>=20){ value.phone=value.phone.slice(0,-1) }
    }
    function validateHandle(val){
        switch(val){
            case 'fn': 
                if(value.firstName.length>2){value.isValid[0]=1} 
                else {value.isValid[0]=0}
                break;

            case 'ln': 
                if(value.lastName.length>2){value.isValid[1]=1} 
                else {value.isValid[1]=0}
                break;

            case 'ph': 
                if(value.phone.length==10){value.isValid[2]=1} 
                else {value.isValid[2]=0}
                break;

            case 'em': 
                if(value.email.length>6 && value.email.includes("@") && value.email.includes(".com",-5))
                {value.isValid[3]=1} 
                else {value.isValid[3]=0}
                break;

            case 'pa': 
                if( value.password.length>8 && 
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(value.password)
                ){value.isValid[4]=1} 
                else {value.isValid[4]=0}
                break;

            default:console.log(value.isValid); 
        }
    }

</script>

<template>

    <div>
        <div>
            <fieldset class="fieldset"  :class="value.isValid[0]==undefined?'no':value.isValid[0]==1?'right':'wrong'">
                <legend v-if="value.firstName" class="legend" >first name</legend>
                <input type="text" id="f_name" placeholder="first name" v-model="value.firstName" 
                @input="firstNameHandle" @change="()=>validateHandle('fn')"/>
            </fieldset>
        </div>
        <div>
            <fieldset class="fieldset" :class="value.isValid[1]==undefined?'no':value.isValid[1]==1?'right':'wrong'" >
                <legend v-if="value.lastName" class="legend">last name</legend>
                <input type="text" id="l_name" placeholder="last name" 
                v-model="value.lastName" 
                @input="lastNameHandle" 
                @change="()=>validateHandle('ln')" />
            </fieldset>
        </div>

        <div>
            <fieldset class="fieldset":class="value.isValid[2]==undefined?'no':value.isValid[2]==1?'right':'wrong'" >
                <legend v-if="value.phone" class="legend">phone</legend>
                <input type="text" id="phone" placeholder="phone"
                v-model="value.phone"
                @input="phoneHandle" 
                @change="()=>validateHandle('ph')" />
            </fieldset>
        </div>
        <div>
            <fieldset class="fieldset" :class="value.isValid[3]==undefined?'no':value.isValid[3]==1?'right':'wrong'">
                <legend v-if="value.email" class="legend">email</legend>
                <input type="email" id="email" 
                placeholder="email"
                v-model="value.email"
                @input="emailHandle" 
                @change="()=>validateHandle('em')" />
            </fieldset>
        </div>
        <div>
            <fieldset class="fieldset" :class="value.isValid[4]==undefined?'no':value.isValid[4]==1?'right':'wrong'">
                <legend v-if="value.password" class="legend">password</legend>
                <input type="text" id="password" placeholder="password"
                 v-model="value.password"
                  @input="passwordHandle" 
                  @change="()=>validateHandle('pa')"/>
            </fieldset>
        </div>
    
    </div>
</template>






<style lang="css" scoped>
     input {
        padding-inline: 10px;
        width: 300px;
        height: 30px;
        font-size: 20px;
        scrollbar-width: disable;
        border:none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    .right{
        border:5px solid green;
    }

    .wrong{
        border:5px solid red;
    }

    .fieldset{
        border-radius:10px;
        margin-top:20px;
    }
    .legend{
        color:white;
    }
</style>