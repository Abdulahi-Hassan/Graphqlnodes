const { ApolloServer } = require("apollo-server");
const UserSchema = require("../typeDefs");
const UserModel = require("../Resolvers");
const Server = new ApolloServer({
  typeDefs: UserSchema,
  resolvers: UserModel,
});
module.exports = Server;
