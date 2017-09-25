import { View, Text, Button } from 'react-native'
import React, { Component } from 'react'

class Login extends Component {
  async loginWithFacebook() {
    // const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('148927799035525', {
    //   permissions: ['public_profile']
    // })
    // if (type === 'success') {
      const token = 'EAACEdEose0cBAPRwk8yY22TsWcaRPanG52j8MO2NCSdDyGy1KbRaDZCwUniIafbZCUPb9cS5ZB0zXQv66iH1LZAmYxzqrrWG88spAm5NO2d6uBZCyXrniDKIxytdYnN8Vg7NbMMY4NsZCkQHDsWEFXcNOCW7aeoJK8qwwXXrTh9LmGjMrl9EZCuCPDZCxHq3rq85Ncf21XncaAZDZD'
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
      </View>
    )
  }
}

export default Login
