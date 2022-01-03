//test
import { gql } from "graphql-tag";

const usersQuery = () => {
  return gql`
    query {
      users {
        id
        firstName
        lastName
      }
    }
  `;
};

export default usersQuery;
