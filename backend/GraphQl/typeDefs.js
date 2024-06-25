const { gql } = require("apollo-server");
const UserSchema = gql`
  type User {
    UserName: String
    Email: String
    Password: String
    Profile: String,
    ID: String
  }
  type Query {
    GetAllUsers: [User]
  }
  type Query {
    GetUserById(ID: ID!): User!
  }

  input UserInput {
    UserName: String
    Email: String
    Password: String
    Profile: String

  }

  type Mutation {
    InsertUser(UserData: UserInput): User!
    UpdateUser(ID: ID, UserEditInput: UserInput): User!
    DeleteUser(ID: ID!): User!
  }
`;
module.exports = UserSchema;
