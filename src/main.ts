import { createApp } from 'vue'
import App from './App.vue'
import "./styles/index.ts"
import {version} from "./core/GameDataBase/how2play/how2play.ts";
import {init} from "./core/init.ts";

createApp(App).mount('#app')

init()
console.log(version)