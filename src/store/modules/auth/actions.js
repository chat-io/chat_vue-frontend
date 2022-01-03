import { authUser } from "../../../services/AuthService.js";

export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signin",
    });
  },
  async auth(context, payload) {
    console.log("auth action");
    console.log(payload);
    console.log(context);

    await authUser(payload);
  },
};
