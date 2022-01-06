import { gql } from "graphql-tag";

const updateUserMutation = (payload) => {
  let dataString = "";
  if (payload.password) {
    dataString = `{id: "${payload.id}", "${payload.id}", firstName: "${payload.firstName}",  lastName: "${payload.lastName}", password: "${payload.password}", gender: "${payload.gender}", avatar: "${payload.avatar}"}`;
  } else {
    dataString = `{id: "${payload.id}", firstName: "${payload.firstName}", lastName: "${payload.lastName}", gender: "${payload.gender}", avatar: "${payload.avatar}"}`;
  }
  return gql`
    mutation {
      updateUser(data: ${dataString}) {
        token
        user {
          id
          firstName
          lastName
          avatar
          gender
        }
      }
    }
  `;
};

export { updateUserMutation };
