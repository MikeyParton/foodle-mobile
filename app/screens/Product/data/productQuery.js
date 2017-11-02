import { gql } from 'react-apollo'

const PRODUCT_QUERY = gql`
  query ProductQuery($barcode: String!, $serving: String) {
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
      nutrients(serving: $serving) {
        energy_unit
        energy_value
        proteins_value
        proteins_unit
        fat_value
        fat_unit
      }
    }
  }
`

export default PRODUCT_QUERY
