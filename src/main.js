import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSmoothScroll from 'vue3-smooth-scroll'


app.use(VueSmoothScroll)
const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueSmoothScroll)
app.mount('#app');
