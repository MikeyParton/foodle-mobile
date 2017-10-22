import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  padding: 10px 0 10px 0;
  border-bottom-color: black;
  border-bottom-width: 1px;
`

const ResultItem = (props) => (
  <Container onPress={() => props.viewProduct(props.barcode)}>
    <Text>{props.name}</Text>
  </Container>
)

export default ResultItem
