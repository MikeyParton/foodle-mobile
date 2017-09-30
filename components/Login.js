import { View, Text, Button, Alert } from 'react-native'
import React, { Component } from 'react'

class Login extends Component {
  async loginWithFacebook() {
    // const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('148927799035525', {
    //   permissions: ['public_profile']
    // })
    // if (type === 'success') {
      const token = 'EAACEdEose0cBAL9DmCsvnh5OlNsehZAOPC0I3DMcRARCLi2JLzlms1UcV8DYa0OqqHFw7R8HF7pN3eJJJxvucCatlWP1ljJBBZBZAsxzTf160y5dJDIZCvlGOgiFf95M0CMW3W3uH6tFnM5ZC6A35DVo7ObgeHFjwZAakX6XtuRowRv0rKZCxomgFb23ZAsonEZCZB7dvcXmBRZCAZDZD'
      const response = await this.props.facebookLoginMutation({ variables: { token }})
      const user = response.data.facebook_login

      if (!user) {
        this.loginError()
      } else {
        this.props.loggedIn(user)
      }
    // }
  }

  loginError() {
    Alert.alert(
      'Sign In Error',
      'There was an error signing in. Please try again.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false }
    )
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
