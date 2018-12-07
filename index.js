const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const fs = require('fs')

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname + '/schema.graphql').toString()),
  resolvers,
  context: ({ req }) => {
    return {
      req,
      headers: {
        'X-Account-Id': req.headers['x-account-id']
      }
    }
  },
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});