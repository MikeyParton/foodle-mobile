import React from 'react'
import { Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Login from './containers/Login'

const LoginScreen = () => (
  <Text>LOGIN</Text>
)

const HomeScreen = () => (
  <Text>HOME</Text>
)

const Navigator = TabNavigator({
  Login: { screen: Login },
  Home: { screen: HomeScreen }
})

export default Navigator
