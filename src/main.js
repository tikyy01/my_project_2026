import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import BuyAdModal from './views/Shared/BuyAdModal.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
app.component("buy-ad-modal", BuyAdModal)
app.mount('#app')