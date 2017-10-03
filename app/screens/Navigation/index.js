import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Login from '../Login'
import Search from '../Search'
import Scanner from '../Scanner'

const Tabs = TabNavigator({
  Search: { screen: Search }
})

const Stack = StackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: { header: null }
  },
  Scanner: {
    getScreen: () => require('../Scanner').default,
    navigationOptions: { header: null }
  }
})

export default Stack
