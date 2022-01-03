//test
import { gql } from "graphql-tag";

const authMuation = (mode, email, password, firstName, lastName, gender) => {
  if (mode === "login") {
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
          }
        }
      }
    `;
  } else {
    // signup
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
          }
        }
      }
    `;
  }
};

export default authMuation;
