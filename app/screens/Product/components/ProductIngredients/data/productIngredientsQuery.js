import { gql } from 'react-apollo'

const PRODUCT_INGREDIENTS_QUERY = gql`
  query ProductIngredientsQuery($barcode: String!) {
    product(barcode: $barcode) {
      id
      ingredients {
        name
      }
    }
  }
`

export default PRODUCT_INGREDIENTS_QUERY
