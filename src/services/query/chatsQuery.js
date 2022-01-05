import { gql } from "graphql-tag";

const chatsQuery = (userId) => {
  return gql`
    query {
      chats(userId: ${userId}) {
        id
        type
        createdAt
        updatedAt
        users {
          id
          avatar
          email
          firstName
          lastName
          gender
        }
        messages {
          id
          type
          fromUserId {
            id
          }
          message
        }
        createdAt
        updatedAt
      }
    }
  `;
};

export default chatsQuery;
