import React from 'react'
import { StackNavigator } from 'react-navigation'
import Search from './Search'
import Scanner from './Scanner'

const Products = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: { title: 'Search', header: null }
  },
  Scan: {
    screen: Scanner,
    navigationOptions: { title: 'Scanner', header: null }
  }
})

export default Products
