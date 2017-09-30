import React from 'react'
import { graphql, compose } from 'react-apollo'
import FACEBOOK_LOGIN_MUTATION from './facebookLoginMutation'
import Login from '../../components/Login'
import { connect } from 'react-redux'
import { loggedIn } from './actions'

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
