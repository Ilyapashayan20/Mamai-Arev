import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/main.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://api-mamaiarev.onrender.com'



const app = createApp(App)
app.use(store).use(router).mount('#app').AOS = new AOS.init()
app.component()
