import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Login from '../Login'
import Scanner from '../Scanner'

import Profile from '../Profile'

import Search from '../Search'
import Product from '../Product'

const Products = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
})

const Main = TabNavigator({
  Products: { screen: Products },
  Profile: { screen: Profile }
})

const Stack = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  },
  Scanner: {
    getScreen: () => require('../Scanner').default,
    navigationOptions: {
      header: null
    }
  }
})

export default Stack
