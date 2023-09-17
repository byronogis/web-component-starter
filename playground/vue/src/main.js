import { createApp } from 'vue'
import { defineWebComponents } from 'web-component-starter'
import App from './App.vue'

defineWebComponents()

const app = createApp(App)

app.mount('#app')
