import typeDefs from "./schema";
import resolvers from "./graphql";

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Apollo server is Ready! ${url}`);
});

