import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { ContentContainer, Heading, SubHeading } from '../../../components/UI'
import { List, ListItem } from 'react-native-elements'

const Hero = styled.Image`
  height: 200px;
  width: 100%;
  margin-bottom: 10px;
`

ProductContent = (props) => (
  <ContentContainer>
    <Hero
      source={{uri: 'https://dummyimage.com/400x200/000/fff.png'}}
    />
    <Heading>{props.brands[0].name} {props.name}</Heading>
    <ScrollView>
      <List>
        { props.ingredients.map((ingredient, i) => <ListItem key={i} title={ingredient.name} />) }
      </List>
    </ScrollView>
  </ContentContainer>
)

export default ProductContent
