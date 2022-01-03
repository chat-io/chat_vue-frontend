export const getUserInfoFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
};
