import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, StatusBar, TextInput } from 'react-native'
import IngredientsList from '../containers/IngredientsList'

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    height: 75,
    backgroundColor: '#02A859',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: '#D9E2DE'
  }
})

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      data: [],
      filteredData: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.getData = this.getData.bind(this)
  }

  handleChange(event) {
    const query = event.nativeEvent.text
    this.setState({ query }, () => {
      this.getData()
    })
  }

  getData() {
    const { data, query } = this.state
    const newData = data.filter((row) => {
      return row.key.toLowerCase().includes(query.toLowerCase())
    })
    this.setState({ filteredData: newData })
  }

  render() {
    const { query, filteredData } = this.state
    const { ingredients } = this.props.data

    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.header}>
          <Text style={styles.headerText}>Foodle</Text>
        </View>
        <TextInput value={query} onChange={this.handleChange} placeholder="Search for Something" />
        <Text style={styles.heading}>INGREDIENTS</Text>
        <IngredientsList />
      </View>
    )
  }
}

export default Search
