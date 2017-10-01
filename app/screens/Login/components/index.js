import { View, Text, TouchableOpacity, Alert, ActivityIndicator, Animated } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Spinner from './Spinner'
import { Screen, Heading, ButtonText, LoginButton, SubHeading } from './styled'

class Login extends Component {
  state = {
    loggingIn: false
  }

  async loginWithFacebook() {
    this.loggingIn()
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
      return
    // }
  }

  loggingIn() {
    this.setState({ loggingIn: true })
  }

  loginError() {
    this.setState({ loggingIn: false })
    Alert.alert(
      'Sign In Error',
      'There was an error signing in. Please try again.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false }
    )
  }

  render () {
    const { loggingIn } = this.state
    let icon
    return (
      <Screen>
        <Heading>Foodle</Heading>
        <SubHeading>Eat Right</SubHeading>
        <LoginButton disabled={loggingIn} onPress={() => this.loginWithFacebook()}>
          {
            loggingIn
              ? <Spinner color={"white"}/>
              : <Icon name="facebook" color="white"/>
          }
          <ButtonText>Login with Facebook</ButtonText>
        </LoginButton>
        {
          this.props.currentUser &&
            <Text>Welcome { this.props.currentUser.first_name }</Text>
        }
      </Screen>
    )
  }
}

export default Login
