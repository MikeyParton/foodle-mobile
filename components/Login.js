import { View, Text, Button } from 'react-native'
import React, { Component } from 'react'

class Login extends Component {
  async loginWithFacebook() {
    // const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('148927799035525', {
    //   permissions: ['public_profile']
    // })
    // if (type === 'success') {
      const token = 'EAACEdEose0cBAMssGaEMPtynRVK7izJyIZBs9KZAmMLxf7SAVz3WiklAskaRXZA2Nk0c2zyTVJIIVv2BwsALGDMfHqQE1NIZCj5ZCVqzdk3W2eqZCAfx9eLNH34Y3DkMebMOEojMQUX9jQkLbbDoud5Dl2dMVTWecSgdKWW0jFRhsp8ZBHKpJMbuHiqLP2s04RwwITwQYLoYAZDZD'
      const response = await this.props.mutate({ variables: { token }})
      this.props.loggedIn(response.data.facebook_login)
    // }
  }

  render () {
    return (
      <View>
        <Text>Welcome to the Facebook SDK for React Native!</Text>
        <Button
          title="Sign In"
          onPress={() => this.loginWithFacebook() }
        />
        {
          this.props.currentUser && <Text>
            Welcome { this.props.currentUser.first_name }
          </Text>
        }
      </View>
    )
  }
}

export default Login
