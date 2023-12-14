import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { router } from "./router/router";

const app = createApp(App);
app.use(router);
app.mount("#app");
