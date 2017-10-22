import React from 'react'

import { View } from 'react-native'
import Header from '../../../components/Header'
import BackButton from '../../../components/BackButton'
import Title from '../../../components/Title'

const ProductHeader = (props) => {
  title = props.product.name || ""
  return (
    <Header>
      <BackButton onBack={props.onBack} />
      <Title>{title}</Title>
      <View/>
    </Header>
  )
}

export default ProductHeader
