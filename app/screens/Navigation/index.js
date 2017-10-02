import React from 'react'
import { TabNavigator } from 'react-navigation'
import Login from '../Login'
import Products from '../Products'
import Scanner from '../Scanner'

const Navigator = TabNavigator({
  Products: { screen: Products },
  Login: { screen: Login },
  Scanner: { screen: Scanner }
})

export default Navigator
