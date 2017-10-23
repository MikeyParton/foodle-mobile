import React from 'react'
import { View } from 'react-native'
import { Header, BackButton, Title } from '../../../components/UI'

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
