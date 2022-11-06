import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setApolloClient } from '../utility';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  // link: new HttpLink({
  //   fetch,
  //   uri: 'http://localhost:4000'
  // })
});

setApolloClient( client );

export default client;