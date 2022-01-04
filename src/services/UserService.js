import apolloClient from "./apollo-client";
// import usersQuery from "./query/users.js";
import { updateUserMutation } from "./mutation/userMutation.js";

// const getUsers = async () => {
//   const response = await apolloClient.query({
//     query: usersQuery(),
//   });

//   return response;
// };

const updateUser = async (payload) => {
  const response = await apolloClient.mutate({
    mutation: updateUserMutation(payload),
  });

  return response;
};

export { updateUser };
