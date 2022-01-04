import { authUser } from "../../../services/AuthService.js";

import { setLocalStorageForUser } from "../../helper/setLcoalStorage.js";
import { getAuthDataFromLocalStorage } from "../../helper/getLocalStorage.js";

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
        avatar: userData.data[payload.mode].avatar,
        gender: userData.data[payload.mode].user.gender,
      },
    };

    context.commit("setUser", {
      token: setLocalStoragePayload.token,
      user: setLocalStoragePayload.user,
    });
    setLocalStorageForUser(setLocalStoragePayload);
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    context.commit("setUser", {
      token: null,
      user: null,
    });
  },
  updateUser(context, payload) {
    context.commit("setUser", {
      token: payload.token,
      user: payload.user,
    });
  },
  async updateUserAvatar(context, payload) {
    const response = await fetch(
      `${process.env.VUE_APP_FILESERVER_URL}/avatar/${context.getters.getUser.id}`,
      {
        method: "PUT",
        body: payload,
      }
    );
  },
  tryLogin(context) {
    const { token, user } = getAuthDataFromLocalStorage();

    if (token && user) {
      context.commit("setUser", {
        token,
        user,
      });
    }
  },
};
