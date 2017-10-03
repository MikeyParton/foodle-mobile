import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import SearchBox from './SearchBox'
import Results from './Results'

export const ScanButton = styled.TouchableOpacity`
  flex: 0;
  width: 200px
  flex-direction: row;
  align-items: center;
  background-color: #3b5998;
  padding: 20px;
  border-radius: 20px;
`

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
    this.openScanner = this.openScanner.bind(this)
  }

  onQueryChange(newQuery) {
    this.props.updateProductsQuery(newQuery)
  }

  openScanner() {
    this.props.navigation.navigate('Scan')
  }

  render() {
    const { products } = this.props.data
    const { query } = this.props
    const { active } = this.state

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
        <ScanButton onPress={this.openScanner}>
          <Text>Scan Barcode</Text>
        </ScanButton>
      </View>
    )
  }
}

export default Products
