import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Table = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Cell = styled.View`
  width: 33%;
  padding: 25px 0 25px 0;
`

const Title = styled.Text`
  font-size: 16px;
  text-align: center;
`

const Label = styled.Text`
  text-align: center;
`


const Nutrient = (props) => (
  <Cell>
    <Title>{`${props.value} ${props.unit}`}</Title>
    <Label>{props.label}</Label>
  </Cell>
)

const ProductNutrients = (props) => {
  const {
    energy_value,
    energy_unit,
    proteins_value,
    proteins_unit,
    fat_value,
    fat_unit
  } = props
  return (
    <View style={{flex: 1}}>
      <Table>
        <Nutrient label={'Energy'} value={energy_value} unit={energy_unit}/>
        <Nutrient label={'Protein'} value={proteins_value} unit={proteins_unit}/>
        <Nutrient label={'Fat'} value={fat_value} unit={fat_unit}/>
      </Table>
    </View>
  )
}

export default ProductNutrients
