export default {
  setUser(state, payload) {
    const { token, user } = payload;
    state.token = token;
    state.user = user;
  },
};
