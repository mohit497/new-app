import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";
import router from "./router";
import moment from 'moment'

loadFonts();

const app = createApp(App).use(router).use(store).use(vuetify).mount("#app");

app.config.globalProperties.$moment = moment
