import gql from "graphql-tag";

export const GET_SELF = gql`
  {
    self {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        image
        title
        description
        link
      }
    }
  }
`;