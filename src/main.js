import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import Router from './router/index'

const app = createApp(App)

app.use(Router)
app.use(createPinia())

app.mount('#app')
