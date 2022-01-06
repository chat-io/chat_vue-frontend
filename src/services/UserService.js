import apolloClient from "./apollo-client";
import { updateUserMutation } from "./mutation/userMutation.js";

const updateUser = async (payload) => {
  console.log("gq update user");
  const response = await apolloClient.mutate({
    mutation: updateUserMutation(payload),
  });
  console.log(response);

  return response;
};

export { updateUser };
