import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { API_URL } from './config'
import localstorage from './services/localstorage'

const networkInterface = createNetworkInterface({
  uri: API_URL
})

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = await localstorage.getItem('foodle_token')
    req.options.headers.authorization = token ? `Bearer ${token}` : null
    next()
  }
}])

const client = new ApolloClient({
  networkInterface
})

export default client
