import React from 'react'
// import Search from './components/Search'
import client from './app/apolloClient'
import store from './app/store'
import Navigation from './app/screens/Navigation'
import { gql, ApolloProvider, graphql } from 'react-apollo';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <Navigation />
      </ApolloProvider>
    )
  }
}

export default App
