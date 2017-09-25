import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://a636c969.ngrok.io/graphql'
})

const client = new ApolloClient({
  networkInterface
})

export default client
