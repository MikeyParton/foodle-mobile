import React from 'react'
import { View, Text, Image, ScrollView, Animated, StatusBar, TouchableOpacity } from 'react-native'
import { Screen, Heading, SubHeading, Header, BackButton, Title } from '../../../components/UI'
import EStyleSheet from 'react-native-extended-stylesheet'
import LinearGradient from 'react-native-linear-gradient'
import ProductIngredients from './ProductIngredients'
import ProductNutrients from './ProductNutrients'

const TAB_HEIGHT = 30
const MAX_HEIGHT = 250 + TAB_HEIGHT
const MIN_HEIGHT = 75 + TAB_HEIGHT
const SCROLL_DISTANCE = MAX_HEIGHT - MIN_HEIGHT


styles = EStyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
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
    bottom: TAB_HEIGHT,
    width: null,
    minHeight: MAX_HEIGHT - TAB_HEIGHT,
    paddingBottom: TAB_HEIGHT,
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
    height: 100,
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
  tabs: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E9E9EF',
    borderBottomColor: '#989898',
    borderBottomWidth: 1
  }
})

class ProductContent extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
    tabIndex: 2
  }

  onBack = () => {
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

    const onScroll= Animated.event([
      { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
    ])

    const { product } = this.props.data
    const { tabIndex } = this.state
    const title = product ? product.name : ""
    const ingredients = product ? product.ingredients : []
    const nutrients = product ? product.nutrients : null

    return (
      <Screen>
        <StatusBar barStyle='light-content' />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          scrollEventThrottle={16}
          onScroll={onScroll}>
          <View style={styles.scrollContent}>
            { tabIndex == 1 && <ProductIngredients ingredients={ingredients}/> }
            { tabIndex == 2 && <ProductNutrients {...nutrients}/> }
          </View>
        </ScrollView>
        <Animated.View
          style={[styles.hero, { height: heroHeight }]}>
          <Animated.Image
            style={[styles.backgroundImage, { transform: [{ translateY: imageTranslate }], opacity: imageOpacity }]}
            source={{uri: 'https://i.ytimg.com/vi/MTXFeIKEQ-g/maxresdefault.jpg'}}/>
          <Animated.View style={[styles.overlayContainer], { opacity: overlayOpacity }}>
            <LinearGradient  colors={["black", "transparent"]} locations={[0.5, 1]} style={styles.linearGradient}/>
          </Animated.View>
          <View style={styles.header}>
            <BackButton onBack={this.onBack} />
            <Title>{title}</Title>
            <View/>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity
              onPress={() => this.setState({ tabIndex: 1 })}>
              <Text>Ingredients</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ tabIndex: 2 })}>
              <Text>Nutrients</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Screen>
    )
  }
}

export default ProductContent
