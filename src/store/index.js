import { createStore } from "vuex";

import testModule from "./modules/test/index.js";
import authModule from "./modules/auth/index.js";

export default createStore({
  modules: {
    test: testModule,
    auth: authModule,
  },
});
