import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = styled.View`
  background-color: ${props => props.theme.primaryLight}
  padding: 50px 20px 20px 20px;
  flex-direction: row
  justify-content: space-between;
`

const BackButton = (props) => (
  <TouchableOpacity onPress={() => props.onBack() }>
    <Icon name={'angle-left'} size={30} color={'white'} />
  </TouchableOpacity>
)

const Title = styled.Text`
  color: white
  font-size: 20px
`

class Product extends React.Component {
  constructor() {
    super()
    this.onBack = this.onBack.bind(this)
  }

  onBack () {
    this.props.navigation.navigate('Search')
  }

  render() {
    const { product } = this.props.data
    // const { barcode } = this.props

    return(
      <View>
        <Header>
          <BackButton onBack={this.onBack} />
          <Title>Product</Title>
          <View/>
        </Header>
        {
          product && <View>
            <Text>{product.name}</Text>
          </View>
        }
      </View>
    )
  }
}

export default Product
