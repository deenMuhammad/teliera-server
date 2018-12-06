const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const fs = require('fs')

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname + '/schema.graphql').toString()),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});