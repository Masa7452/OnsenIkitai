import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setApolloClient } from './utility';
import { ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux'
import store from "../redux/store";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    // link: new HttpLink({
    //   fetch,
    //   uri: 'http://localhost:4000'
    // })
  });
  
setApolloClient ( client );

export const wrapRootElement = ( { element } ) => ( <ApolloProvider client={client}><Provider store={store}></Provider>{element}</ApolloProvider> );

