import './assets/main.scss'
import Tres from '@tresjs/core'
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

app.use(Tres)

app.mount('#app')
