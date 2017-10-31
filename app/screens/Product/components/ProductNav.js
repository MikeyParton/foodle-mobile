import React from 'react'
import { TabNavigator } from 'react-navigation'
import ProductIngredients from './ProductIngredients'
import ProductNutrients from './ProductNutrients'

const ProductNav = TabNavigator({
  Ingredients: {
    screen: ProductIngredients,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Nutrients: {
    screen: ProductNutrients,
    navigationOptions: {
      tabBarVisible: false
    }
  }
})

export default ProductNav
