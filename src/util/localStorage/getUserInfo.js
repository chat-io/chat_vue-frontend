export const getUserInfoFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
};

export const setUserInfoInLocalStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};
