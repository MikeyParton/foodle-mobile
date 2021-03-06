import React from 'react'
// import Search from './components/Search'
import client from './app/apolloClient'
import store from './app/store'
import Navigation from './app/screens/Navigation'
import { gql, ApolloProvider, graphql } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import theme from './app/theme'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
  $primaryLight: '#02A859',
  $primaryDark: '#028A49',
  $textLight: 'white'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default App
