const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');
const fs = require('fs')

const server = new ApolloServer({
  typeDefs: gql(fs.readFileSync(__dirname + '/schema.graphql').toString()),
  resolvers,
  context: ({ req }) => {
    const userAgent = req.headers['user-agent'];
    const accountId = req.headers['x-accounts-id'];
    const cookie = req.headers['cookie'];

    return {
      req,
      headers: {
        'User-Agent': userAgent || '',
        'X-Accounts-Id': accountId || '',
        'Cookie': cookie || '',
        'Content-Type': 'application/json'
      }
    }
  },
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});