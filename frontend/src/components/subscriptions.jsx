import { ApolloClient, HttpLink, InMemoryCache, gql, split } from "@apollo/client";
import { GraphQLWsLink } from  '@apollo/client/link/subscriptions'
import { getMainDefinition } from "@apollo/client/utilities";
import {createClient} from 'graphql-ws'

const httplink = new HttpLink({
  uri: import.meta.env.VITE_HASURA_URL,
  // headers: {
  //   "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
  // },
});

// const wslink=new GraphQLWsLink(createClient({
//     url:import.meta.env.VITE_HASURA_WS_URL,
//     connectionParams:{
//         headers:{
//             "x-hasura-admin-secret":import.meta.env.VITE_HASURA_ADMIN_SECRET
//         }
//     }
  
// }))


// const splitLink = split(
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return (
//         definition.kind === 'OperationDefinition' &&
//         definition.operation === 'subscription'
//       );
//     },
//     wslink,
//     httplink,
//   );


export const client= new ApolloClient({
    link:httplink,
    cache:new InMemoryCache()
})

export const GetallPosts = gql`
 subscription GetPosts{
  Posts{
    id,
    title,
    body,
    thumbnail
    date
  }
 }
`;

  export const GetAllUsers = gql`
    subscription MyQuery {
      User {
        ID
        UserName
        Email
        Password
        Profile
        Date
      }
    }
  `;
 