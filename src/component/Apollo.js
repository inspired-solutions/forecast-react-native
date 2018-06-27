import React from "react";
import { ApolloProvider } from "react-apollo";
import client from '../apollo/apolloClient'

import MainScreen from "../screen/MainScreen";

export default class Apollo extends React.Component {
 
  render() {
    return (
      <ApolloProvider client={client}>
        <MainScreen/>
      </ApolloProvider>
    );
  }
}