import { gql } from 'react-apollo'

const PRODUCT_NUTRIENTS_QUERY = gql`
  query ProductNutrientsQuery($barcode: String!, $serving: String) {
    product(barcode: $barcode) {
      id
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

export default PRODUCT_NUTRIENTS_QUERY
