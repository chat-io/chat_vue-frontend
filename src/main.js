import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
const app = createApp(App);

app.use(store);
app.use(router);

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseDialog", BaseDialog);
app.component("BaseSpinner", BaseSpinner);

app.mount("#app");
