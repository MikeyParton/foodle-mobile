import React from 'react'
import { View, Text } from 'react-native'
import Ingredient from './Ingredient'
import { get } from 'lodash'

const ProductIngredients = (props) => {
  return (
    <View>
      { props.ingredients.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient}/>
      ))}
    </View>
  )
}

export default ProductIngredients
