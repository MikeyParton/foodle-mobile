import React from 'react'
import Login from './containers/Login'
// import Search from './components/Search'
import client from './config/apolloClient'
import store from './store'
import Navigator from './Navigator'
import { gql, ApolloProvider, graphql } from 'react-apollo';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        {/* <Login /> */}
        <Navigator />
      </ApolloProvider>
    )
  }
}

export default App
