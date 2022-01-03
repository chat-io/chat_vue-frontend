import { authUser } from "../../../services/AuthService.js";
import { setLocalStorageForUser } from "../../helper/setLcoalStorage.js";

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
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const userData = await authUser(payload);

    const setLocalStoragePayload = {
      token: userData.data[payload.mode].token,
      user: {
        id: userData.data[payload.mode].user.id,
        email: userData.data[payload.mode].email,
        firstName: userData.data[payload.mode].user.firstName,
        lastName: userData.data[payload.mode].user.lastName,
        gender: userData.data[payload.mode].user.gender,
      },
    };

    setLocalStorageForUser(setLocalStoragePayload);
  },
};
