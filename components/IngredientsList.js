import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white'
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18
  }
})

const IngredientsList = ({ data }) => (
  {
    data.ingredients && <FlatList
      contentContainerStyle={styles.content}
      data={data.ingredients}
      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      keyExtractor={(item) => item.id}
    />
  }
)

export default IngredientsList
