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
        'User-Agent': req.headers['user-agent'],
        'X-Accounts-Id': req.headers['x-accounts-id'],
        'Content-Type': 'application/json'
      }
    }
  },
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});