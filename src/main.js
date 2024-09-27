// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';            // CSS do Bootstrap  // JavaScript do Bootstrap (bundle inclui Popper.js)
import 'bootstrap-icons/font/bootstrap-icons.css';

import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";// Bootstrap Icons (se necessário)


const app = createApp(App);
app.provide('bootstrap', bootstrap);
app.use(router);
app.use(store);
app.mount('#app');
