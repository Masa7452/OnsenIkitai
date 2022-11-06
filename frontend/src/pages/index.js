import * as React from "react"
import 'semantic-ui-css/semantic.min.css';
import Top from "./top";
import client from "../client";
import { ApolloProvider, gql } from "@apollo/client";
import { Provider } from 'react-redux'
import store from "../redux/store";

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Top />
      </Provider>
    </ApolloProvider>
  )
}

export const Head = () => <title>OnsenIkitai</title>

export default IndexPage
