import apolloClient from "./apollo-client";
import authMutation from "./mutation/authMutation.js";

const authUser = async (payload) => {
  const authResponse = await apolloClient.mutate({
    mutation: authMutation(payload),
  });

  return authResponse;
};

export { authUser };
