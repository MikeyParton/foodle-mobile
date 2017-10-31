import React from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

styles = EStyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: 'white'
  }
})

const Ingredient = (props) => (
  <View style={styles.listItem}>
    <Text>{props.name}</Text>
  </View>
)

export default Ingredient
