import React from 'react'
import styled from 'styled-components/native'
import { Animated } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

styles = EStyleSheet.create({
  header: {
    backgroundColor: '$primaryLight',
    paddingTop: 25,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default (props) => {
  const opacity = props.animatedOpacity || 1
  return (
    <Animated.View
      style={[
        styles.header,
        { opacity: opacity }
      ]}
    >
      {props.children}
    </Animated.View>
  )
}
