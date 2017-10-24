import React from 'react'
import { View, Text, Image, ScrollView, Animated, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { ContentContainer, Heading, SubHeading } from '../../../components/UI'
import { List, ListItem } from 'react-native-elements'

const MAX_HEIGHT = 250
const MIN_HEIGHT = 50
const SCROLL_DISTANCE = MAX_HEIGHT - MIN_HEIGHT

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollViewContent: {
    marginTop: MAX_HEIGHT
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: MAX_HEIGHT,
    overflow: 'hidden',
    backgroundColor: 'blue'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: MAX_HEIGHT,
    resizeMode: 'cover',
  }
})

class ProductContent extends React.Component {
  constructor(props) {
    super()
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  render() {
    const heroHeight = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_DISTANCE],
      outputRange: [MAX_HEIGHT, MIN_HEIGHT],
      extrapolate: 'clamp'
    })

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    })

    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })

    const { ingredients } = this.props
    return (
      <ContentContainer>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          scrollEventThrottle={16}
          onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: this.state.scrollY } } } ]) }>
          <View style={styles.scrollViewContent}>
            <List>
              { ingredients.map((ingredient, i) => <ListItem key={i} title={ingredient.name} />) }
            </List>
          </View>
        </ScrollView>
        <Animated.View
          style={[
            styles.hero,
            { height: heroHeight }
          ]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }
            ]}
            source={{uri: 'https://dummyimage.com/400x200/000/fff.png'}}/>
        </Animated.View>
      </ContentContainer>
    )
  }
}

export default ProductContent
