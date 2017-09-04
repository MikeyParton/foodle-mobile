import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://a3b88b19.ngrok.io/graphql'
})

const client = new ApolloClient({
  networkInterface
})

export default client
