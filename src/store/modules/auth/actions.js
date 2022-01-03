import { authUser } from "../../../services/AuthService.js";

export default {
  login(context, payload) {
    context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  signup(context, payload) {
    context.dispatch("auth", {
      ...payload,
      mode: "signin",
    });
  },
  auth(context, payload) {
    console.log("auth action");
    console.log(payload);
    console.log(context);

    authUser(payload);
  },
};
