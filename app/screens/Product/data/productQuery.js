import { gql } from 'react-apollo'

const PRODUCT_QUERY = gql`
  query ProductQuery($barcode: String!) {
    product(barcode: $barcode) {
      id
      name
    }
  }
`

export default PRODUCT_QUERY
