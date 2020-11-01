import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-green/theme.css";

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import ProgressBar from "primevue/progressbar";

const app = createApp(App)
    .use(store)
    .use(router);

app.config.globalProperties.$primevue = { ripple: true };

app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("ProgressBar", ProgressBar);

app.mount("#app");
