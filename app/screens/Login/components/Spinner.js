import { Animated, Easing } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const AnimatableIcon = Animated.createAnimatedComponent(Icon)

class Spinner extends React.Component {
  spinValue = new Animated.Value(0)

  componentDidMount() {
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return(
      <AnimatableIcon
        style={{ transform: [{rotate: spin}] }}
        name="spinner"
        {...this.props}
      />
    )
  }
}

export default Spinner
