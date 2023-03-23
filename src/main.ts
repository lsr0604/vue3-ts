import { createApp } from "vue";
import router from "./router";
import ElementPlus from "element-plus";
// 需要注意的是，样式文件需要单独引入。
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

//pinia
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(ElementPlus).use(router).use(pinia).mount("#app");
