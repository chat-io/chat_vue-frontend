import apolloClient from "./apollo-client";
import usersQuery from "./query/users.js";

const getUsers = async () => {
  const response = await apolloClient.query({
    query: usersQuery(),
  });

  return response;
};

const UserService = { getUsers };

export default UserService;
