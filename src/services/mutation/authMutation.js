//test
import { gql } from "graphql-tag";

const authMuation = (payload) => {
  const mode = payload.mode;

  if (mode === "login") {
    const { email, password } = payload;

    // login
    return gql`
      mutation {
        login(data: {email: "${email}", password: "${password}"}) {
          # expiresIn 구현 (github #6)
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
  } else {
    // signup

    const { email, password, firstName, lastName, gender } = payload;

    return gql`
      mutation {
        signup(data: {
          email: "${email}",
          password: "${password}",
          firstName: "${firstName}",
          lastName: "${lastName}",
          gender: "${gender}",
        }) {
          token
          user {
            id
            firstName
            lastName
            email
            avatar
            gender
          }
        }
      }
    `;
  }
};

export default authMuation;
