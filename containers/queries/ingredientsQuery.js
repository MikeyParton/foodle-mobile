import { gql, graphql } from 'react-apollo'

const ingredientsQuery = gql`
  query IngredientsQuery {
    ingredients {
      id
      name
      description
    }
  }
`

export default ingredientsQuery
