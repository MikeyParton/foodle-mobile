import React from 'react'
import { TouchableWithoutFeedback, View, Text, Keyboard, Animated } from 'react-native'

class Cancel extends React.Component {
  render(){
    const width = this.props.width.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    })
    return(
      <Animated.View style={{maxWidth: width, overflow: 'hidden'}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text numberOfLines={1}>Cancel</Text>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
    )
  }
}

export default Cancel
