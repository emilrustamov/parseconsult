import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installSeo } from './seo'
import { applyDocumentLang, i18n } from './i18n'

const app = createApp(App)
app.use(i18n)
app.use(router)
installSeo(router, i18n as never)
applyDocumentLang(i18n.global.locale.value as 'ru' | 'en')
app.mount('#app')
