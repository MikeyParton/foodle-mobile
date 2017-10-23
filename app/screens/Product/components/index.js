import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Screen } from '../../../components/UI'
import ProductHeader from './ProductHeader'
import ProductContent from './ProductContent'


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
    const title = product ? product.name : ""

    return(
      <Screen>
        <ProductHeader title={title} onBack={this.onBack}/>
        { product && <ProductContent {...product}/> }
      </Screen>
    )
  }
}

export default Product
