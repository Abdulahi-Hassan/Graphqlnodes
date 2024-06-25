import { gql } from "@apollo/client";

export const CreateUser = gql`
  mutation MyMutation($userData: UserInput) {
    InsertUser(UserData: $userData) {
      Email
      Password
      Profile
      UserName
      ID
    }
  }
`;

export const UpdateUser = gql`
  mutation MyMutation($id: ID, $userEditInput: UserInput) {
    UpdateUser(ID: $id, UserEditInput: $userEditInput) {
      Email
      ID
      Password
      Profile
      UserName
    }
  }
`;

export const Deleteuser = gql`
  mutation MyMutation($id: ID!) {
    DeleteUser(ID: $id) {
      Email
      ID
      Password
      Profile
      UserName
    }
  }
`;

export const GetAllUserss = gql`
  query Query {
    GetAllUsers {
      Email
      Password
      UserName
      Profile
      ID
    }
  }
`;
