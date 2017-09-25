import React from 'react'
import { graphql } from 'react-apollo'
import facebookLoginMutation from './facebookLoginMutation'
import Login from '../../components/Login'
import { connect } from 'react-redux'
import { loggedIn } from './actions'

const mapStateToProps = (state) => ({
  currentUser: state.Login.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  loggedIn (user) {
    dispatch(loggedIn(user))
  }
})

// const facebookSignIn = graphql(facebookSignInMutation, {
//   props: ({ ownProps, mutate }) => ({
//     facebookSignIn: (name, email) => mutate({
//       variables: { name, email }
//     })
//   })
// })

const LoginWithMutations = graphql(facebookLoginMutation)(Login)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithMutations)
