import apolloClient from "./apollo-client";
import chatsQuery from "./query/chatsQuery";

const fetchChatsFromBackend = async (payload) => {
  const response = await apolloClient.query({
    query: chatsQuery(payload),
  });
  return response;
};

export { fetchChatsFromBackend };
