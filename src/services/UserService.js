import apolloClient from "./apollo-client";
import { updateUserMutation } from "./mutation/userMutation.js";

const updateUser = async (payload) => {
  const response = await apolloClient.mutate({
    mutation: updateUserMutation(payload),
  });

  return response;
};

export { updateUser };
