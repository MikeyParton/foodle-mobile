import React from 'react'
import { TabNavigator } from 'react-navigation'
import Login from '../Login'
import Products from '../Products'

const Navigator = TabNavigator({
  Products: { screen: Products },
  Login: { screen: Login }
})

export default Navigator
