import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css'; // Import global CSS file
import router from './router';


const app = createApp(App);
app.use(router); 
app.mount('#app');