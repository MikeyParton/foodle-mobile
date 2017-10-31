import React from 'react'
import { View, Text } from 'react-native'
import { get } from 'lodash'

const ProductNutrients = (props) => {
  const {
    energy_value,
    energy_unit,
    proteins_value,
    proteins_unit,
    fat_value,
    fat_unit
  } = get(props, ['data', 'product', 'nutrients'], {})
  return (
    <View>
      <Text>{`Energy ${energy_value} ${energy_unit}`}</Text>
      <Text>{`Protein ${proteins_value} ${proteins_unit}`}</Text>
      <Text>{`Fat ${fat_value} ${fat_unit}`}</Text>
    </View>
  )
}

export default ProductNutrients
