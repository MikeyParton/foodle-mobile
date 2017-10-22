import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ProductHeader from './ProductHeader'
import styled from 'styled-components/native'


class Product extends React.Component {
  constructor() {
    super()
    this.onBack = this.onBack.bind(this)
  }

  onBack () {
    this.props.navigation.navigate('Search')
  }

  render() {
    const { product = {} } = this.props.data

    return(
      <View>
        <ProductHeader product={product} onBack={this.onBack}/>
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
