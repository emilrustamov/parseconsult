import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installSeo } from './seo'

const app = createApp(App)
app.use(router)
installSeo(router)
app.mount('#app')
