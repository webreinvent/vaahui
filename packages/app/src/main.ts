import { createApp } from 'vue'
import App from './App.vue'
import vaahui from './../../vaahui/vaahui';

const app = createApp(App);

app.use(vaahui);

app.mount('#app');
