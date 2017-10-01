import React from 'react'
import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import Login from './components'
import { loggedIn } from './data/actions'
import FACEBOOK_LOGIN_MUTATION from './data/facebookLoginMutation'

const mapStateToProps = (state) => ({
  currentUser: state.login.currentUser
})

const LoginWithMutations = compose(
  graphql(FACEBOOK_LOGIN_MUTATION, { name: 'facebookLoginMutation' })
)(Login)

const mapDispatchToProps = (dispatch) => ({
  loggedIn (user) {
    dispatch(loggedIn(user))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithMutations)
