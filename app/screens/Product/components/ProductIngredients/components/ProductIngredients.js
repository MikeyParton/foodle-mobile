import React from 'react'
import { View, Text } from 'react-native'
import Ingredient from './Ingredient'
import { get } from 'lodash'

const ProductIngredients = (props) => {
  const ingredients = get(props, ['data', 'product', 'ingredients'], [])
  return (
    <View>
      { ingredients.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient}/>
      ))}
    </View>
  )
}

export default ProductIngredients
