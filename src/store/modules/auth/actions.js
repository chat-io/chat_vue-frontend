import { authUser } from "../../../services/AuthService.js";

import { setLocalStorageForUser } from "../../helper/setLcoalStorage.js";
import { getAuthDataFromLocalStorage } from "../../helper/getLocalStorage.js";
import { setDefaultAvatarToFileServer } from "../../helper/setDefaultAvatar.js";

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

    const { id, email, firstName, lastName, avatar, gender } =
      userData.data[payload.mode].user;

    if (payload.mode === "signup") {
      await setDefaultAvatarToFileServer(id);
    }

    const setLocalStoragePayload = {
      token: userData.data[payload.mode].token,
      user: {
        id,
        email,
        firstName,
        lastName,
        avatar,
        gender,
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

    context.commit("chat/setChats", []);
    context.commit("chat/setCurrentChat", {});
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
