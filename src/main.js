import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from './pages/routes.js'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router).mount('#app')
//createApp(App).mount('#app')
