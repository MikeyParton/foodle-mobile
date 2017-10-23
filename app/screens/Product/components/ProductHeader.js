import React from 'react'

import { View } from 'react-native'
import Header from '../../../components/Header'
import BackButton from '../../../components/BackButton'
import Title from '../../../components/Title'

const ProductHeader = (props) => {
  return (
    <Header>
      <BackButton onBack={props.onBack} />
      <Title>{props.title}</Title>
      <View/>
    </Header>
  )
}

export default ProductHeader
