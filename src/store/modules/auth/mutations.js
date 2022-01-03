export default {
  setUser(state, payload) {
    const { token, userId } = payload;
    state.token = token;
    state.userId = userId;
  },
};
