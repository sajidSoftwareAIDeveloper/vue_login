import { reactive } from "vue";

export const store=reactive({
    data:{firstName:null},
    image:[],

    setData(info){
        this.data=info;
       // sessionStorage.setItem('user',JSON.stringify(this.data));

    },
    setImage(info){
        this.image.push(info);
       // sessionStorage.setItem('images',JSON.stringify(this.image));
    },
});