const setDefaultAvatarToFileServer = (userId) => {
  const url = `${process.env.VUE_APP_FILESERVER_URL}/avatar/${userId}`;
  return fetch(url, {
    method: "POST",
  });
};

export { setDefaultAvatarToFileServer };
