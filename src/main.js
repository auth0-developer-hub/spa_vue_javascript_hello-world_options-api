import { createApp } from "vue";
import "./assets/css/styles.css";
import router from "./router";
import App from "./app.vue";

const app = createApp(App);

app.use(router).mount("#root");
