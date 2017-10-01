import { gql } from 'react-apollo'

const FACEBOOK_LOGIN_MUTATION = gql`
  mutation FacebookLoginMutation($token: String!) {
    facebook_login(token: $token) {
      id
      first_name
      last_name
      email
      token
    }
  }
`

export default FACEBOOK_LOGIN_MUTATION
