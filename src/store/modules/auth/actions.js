export default {
  login(context, payload) {
    context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  logout(context, payload) {
    context.dispatch("auth", {
      ...payload,
      mode: "signin",
    });
  },
  auth(context, payload) {
    console.log("auth action");
    console.log(payload);
    console.log(context);
  },
};
