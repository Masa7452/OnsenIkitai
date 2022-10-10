import fetch from 'isomorphic-fetch';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: 'http://localhost:4000/'
  })
});

console.log(client);

export default client;