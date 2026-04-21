import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installSeo } from './seo'
import { applyDocumentLang, i18n, readStoredLocale } from './i18n'

const app = createApp(App)
app.use(i18n)
app.use(router)
installSeo(router, i18n as never)
applyDocumentLang(readStoredLocale())

void router.isReady().then(() => {
  app.mount('#app')
})
