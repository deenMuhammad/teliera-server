const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors')
 
require('./db/index')

const typeDefs = gql(fs.readFileSync(__dirname + '/schema.graphql').toString());

const resolvers = require('./resolvers');
const context = ({ req }) => {
  const accessToken = req.headers.authorization || null; //if not signed in the token in serverside is set to null. Anywhere in the server we can cekc this condition if the user is signed in or not
  return {
    req,
    headers: {
      accessToken: accessToken
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers, context });   //this line is used when we need headers
// const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
app.use(cors({credentials: true}));
const port = process.env.PORT;

app.listen({port: port}, () =>
  console.log(`🚀 Server ready at https://teliera.herokuapp.com:${port}/graphql`),
);
