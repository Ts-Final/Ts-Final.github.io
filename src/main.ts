import { createApp } from 'vue'
import App from './App.vue'
import {load} from "./core/save.ts";
import "./styles/index.ts"

createApp(App).mount('#app')

load()