const getAuthDataFromLocalStorage = () => {
  console.log("getauthdata");
  return {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
  };
};

export { getAuthDataFromLocalStorage };
