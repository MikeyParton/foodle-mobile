import React from 'react'
import Login from './containers/Login'
// import Search from './components/Search'
import client from './config/apolloClient'
import store from './store'
import { gql, ApolloProvider, graphql } from 'react-apollo';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <Login />
      </ApolloProvider>
    )
  }
}

export default App
