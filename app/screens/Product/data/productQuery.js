import { gql } from 'react-apollo'

const PRODUCT_QUERY = gql`
  query ProductQuery($barcode: String!) {
    product(barcode: $barcode) {
      id
      name
      brands {
        name
        id
      }
      ingredients {
        name
      }
    }
  }
`

export default PRODUCT_QUERY
