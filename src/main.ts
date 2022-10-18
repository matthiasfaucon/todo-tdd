import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
