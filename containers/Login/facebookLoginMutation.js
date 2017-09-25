import { gql } from 'react-apollo'

const facebookLoginMutation = gql`
  mutation facebook_login($token: String!) {
    facebook_login(token: $token) {
      id
      first_name
      last_name
      email
      token
    }
  }
`

export default facebookLoginMutation
