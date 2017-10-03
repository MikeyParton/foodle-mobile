import React from 'react'
import { TouchableWithoutFeedback, View, Text, Keyboard, Animated } from 'react-native'
import styled from 'styled-components/native'

const HeaderText = styled.Text`
  color: white;
`

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
          <HeaderText numberOfLines={1}>Cancel</HeaderText>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
    )
  }
}

export default Cancel
