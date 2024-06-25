const { ApolloServer } = require("apollo-server");
const UserSchema = require("../typeDefs");
const UserModel = require("../resolvers");
const Server = new ApolloServer({
  typeDefs: UserSchema,
  resolvers: UserModel,
});
module.exports = Server;
