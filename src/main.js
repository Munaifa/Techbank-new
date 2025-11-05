import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'
import { ObserveVisibility } from 'vue-observe-visibility'

// ✅ Create the app
const app = createApp(App)

// ✅ Register the directive BEFORE using router or mount
app.directive('observe-visibility', ObserveVisibility)

app.use(router)
app.mount('#app')

