import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/vela-orange/theme.css";

import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext'

const app = createApp(App)
    .use(store)
    .use(router);

app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);

app.mount("#app");
