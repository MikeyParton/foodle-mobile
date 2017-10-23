import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native'
import ContentContainer from '../../../components/ContentContainer'
import Heading from '../../../components/Heading'
import Subheading from '../../../components/SubHeading'

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
    <Heading>{props.name}</Heading>
    { props.brands.map((brand) => <Text>{brand.name}</Text>) }
  </ContentContainer>
)

export default ProductContent
