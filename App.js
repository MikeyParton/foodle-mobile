import React from 'react'
import Search from './containers/SearchWithData'
import client from './config/apolloClient'
import { gql, ApolloProvider, graphql } from 'react-apollo';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Search />
      </ApolloProvider>
    )
  }
}

export default App
