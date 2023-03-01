const resolvers = require('./graphql.js');
const typeDefs  = require("./schema.js");
const express   = require("express");
const mysql     = require('mysql');

const { ApolloServer } = require("apollo-server-express");

async function startApolloServer() {

  const app = express();

  // const con = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: 'Iwahara?11'
  // });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log('Sql Connected');
  //   // con.query('CREATE DATABASE express_db', function (err, result) {
  //   // if (err) throw err; 
  //   //   console.log('database created');
  //   // });
  // });
  
  const server = new ApolloServer({
    introspection: true,
    typeDefs,
    resolvers,
    formatError: error => {
      return error
    },
    context: ({ req, res }) => {
      return {
        req,
        res,
      }
    },
  });
  await server.start();

  server.applyMiddleware({ app, path: '/' });

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
  });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}
startApolloServer();