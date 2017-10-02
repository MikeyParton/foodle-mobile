import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import SearchBox from './SearchBox'
import Results from './Results'

const Header = styled.View`
  background-color: ${props => props.theme.primaryLight}
  padding: 50px 20px 20px 20px;
`

const HeaderText = styled.Text`
  color: white;
  text-align: center;
  margin-bottom: 10px;
`

class Products extends React.Component {
  constructor(props) {
    super()

    this.state = {
      active: false
    }

    this.onQueryChange = this.onQueryChange.bind(this)
  }

  onQueryChange(newQuery) {
    this.props.updateProductsQuery(newQuery)
  }

  render() {
    const { products } = this.props.data
    const { query } = this.props
    const { active } = this.state
    console.log('query', query)

    return(
      <View>
        <Header>
          <HeaderText>Products</HeaderText>
          <SearchBox
            active={active}
            query={query}
            onQueryChange={this.onQueryChange}
          />
        </Header>
        { products && <Results results={products} /> }
      </View>
    )
  }
}

export default Products
