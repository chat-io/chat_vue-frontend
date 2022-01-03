const setStorageForUser = (payload) => {
  const { token, user } = payload;
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export { setStorageForUser };
