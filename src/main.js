import { createApp } from 'vue';
import App from './App.vue';

import './assets/tailwind.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSmoothScroll from 'vue3-smooth-scroll';
import {createHead} from '@vueuse/head'




const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueSmoothScroll,  {
    duration: 400,
    updateHistory: true,
    offset: -50,
  });
app.use(createHead())
app.mount('#app');
