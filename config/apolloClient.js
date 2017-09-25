import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://5e8de7b0.ngrok.io/graphql'
})

const client = new ApolloClient({
  networkInterface
})

export default client
