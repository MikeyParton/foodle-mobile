import { gql } from 'react-apollo'

const PRODUCTS_QUERY = gql`
  query ProductsQuery($query: String!) {
    products(query: $query) {
      id
      name
    }
  }
`

export default PRODUCTS_QUERY
