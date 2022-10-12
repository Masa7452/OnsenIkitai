import * as React from "react"
import 'semantic-ui-css/semantic.min.css';
import Top from "./top";
import client from "../client";
import { ApolloProvider } from "@apollo/client";

const IndexPage = () => {
  return (
    <ApolloProvider client={client}>
      <Top />
    </ApolloProvider>
  )
}

export const Head = () => <title>OnsenIkitai</title>

export default IndexPage
