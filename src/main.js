import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import TheHeader from "./components/layout/TheHeader.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faCaretDown);

const app = createApp(App);

app.use(store);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("TheHeader", TheHeader);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseDialog", BaseDialog);
app.component("BaseSpinner", BaseSpinner);

app.mount("#app");
