const resolvers = require('./graphql.js');
const typeDefs  = require("./schema.js");
const express   = require("express");

const { ApolloServer } = require("apollo-server-express");

async function startApolloServer() {

  const app = express();
  
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

  // app.use(cors(corsOptions));
  // app.listen({ port: 4000 }, () =>
  //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  // );

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}
startApolloServer();

// server.listen().then(({url}) => {
//     console.log(`Apollo server is Ready! ${url}`);
// });
