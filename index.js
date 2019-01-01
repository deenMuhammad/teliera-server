const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors')

const typeDefs = gql(fs.readFileSync(__dirname + '/schema.graphql').toString());

const resolvers = require('./resolvers');

const context = ({ req }) => {
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
};

const server = new ApolloServer({ typeDefs, resolvers, context });

const app = express();
server.applyMiddleware({ app });
app.use(cors({credentials: true}));

const port = 3000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
