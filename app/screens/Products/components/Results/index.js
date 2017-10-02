import React from 'react'
import { View, FlatList } from 'react-native'
import ResultItem from './ResultItem'

const Results = (props) => (
  <View>
    <FlatList
      data={props.results}
      renderItem={({item}) => <ResultItem {...item}></ResultItem>}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 20 }}
    />
  </View>
)

export default Results
