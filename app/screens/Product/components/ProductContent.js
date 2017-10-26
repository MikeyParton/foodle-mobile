import React from 'react'
import { View, Text, Image, ScrollView, Animated, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { Screen, Heading, SubHeading, Header, BackButton, Title } from '../../../components/UI'
import { List, ListItem } from 'react-native-elements'
import EStyleSheet from 'react-native-extended-stylesheet'
import LinearGradient from 'react-native-linear-gradient'

const MAX_HEIGHT = 250
const MIN_HEIGHT = 75
const SCROLL_DISTANCE = MAX_HEIGHT - MIN_HEIGHT

styles = EStyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollViewContent: {
    marginTop: MAX_HEIGHT,
    position: 'relative'
  },
  hero: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: MAX_HEIGHT,
    overflow: 'hidden',
    backgroundColor: '$primaryLight'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    minHeight: MAX_HEIGHT,
    height: '100%',
    resizeMode: 'cover',
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    width: '100%',
    backgroundColor: 'transparent'
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: 'transparent',
    zIndex: 500
  },
})

class ProductContent extends React.Component {
  constructor(props) {
    super()
    this.state = {
      scrollY: new Animated.Value(0)
    }

    this.onBack = this.onBack.bind(this)
  }

  onBack () {
    this.props.navigation.navigate('Search')
  }

  render() {
    const heroHeight = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_DISTANCE],
      outputRange: [MAX_HEIGHT, MIN_HEIGHT],
      extrapolateRight: 'clamp'
    })

    const overlayOpacity = this.state.scrollY.interpolate({
      inputRange: [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE],
      outputRange: [0.4, 0.4, 0],
      extrapolate: 'clamp',
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

    const { product } = this.props.data
    const title = product ? product.name : ""
    const ingredients = product ? product.ingredients : []

    return (
      <Screen>
        <StatusBar barStyle='light-content' />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          scrollEventThrottle={16}
          onScroll={Animated.event([ { nativeEvent: { contentOffset: { y: this.state.scrollY } } } ]) }>
          <View style={styles.scrollViewContent}>
            <Text style={{ position: 'absolute', top: 0 }}>Ingredients</Text>
            <List style={{ marginTop: 20 }}>
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
              { transform: [{ translateY: imageTranslate }], opacity: imageOpacity }
            ]}
            source={{uri: 'https://i.ytimg.com/vi/MTXFeIKEQ-g/maxresdefault.jpg'}}/>
          <Animated.View style={[styles.overlayContainer], { opacity: overlayOpacity }}>
            <LinearGradient  colors={["black", "transparent"]} locations={[0.5, 1]} style={styles.linearGradient}/>
          </Animated.View>
          <View style={styles.header}>
            <BackButton onBack={this.onBack} />
            <Title>{title}</Title>
            <View/>
          </View>
        </Animated.View>
      </Screen>
    )
  }
}

export default ProductContent
