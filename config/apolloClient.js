import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { AsyncStorage } from 'react-native'

const networkInterface = createNetworkInterface({
  uri: 'https://c43f86e8.ngrok.io/graphql'
})

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = await AsyncStorage.getItem('foodle_token')
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

export default client
