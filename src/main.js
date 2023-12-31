import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import './style/index.scss';

createApp(App).use(store).use(i18n).use(router).mount("#app");
