import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap-icons/font/bootstrap-icons.css"; // ← IMPORTANTE

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

AOS.init({
  duration: 900,
  offset: 120,
  easing: "ease-out-quart",
  once: false
});

app.mount('#app');

