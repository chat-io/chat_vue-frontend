import apolloClient from "./apollo-client";
import authMutation from "./mutation/authMutation.js";

const authUser = async (payload) => {
  console.log("authUser activated");
  console.log(payload);
  const authResponse = await apolloClient.mutate({
    mutation: authMutation(payload),
  });

  console.log("mutation end");
  console.log("mode");
  console.log(payload.mode);
  console.log(authResponse);
};

export { authUser };
