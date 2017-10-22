import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const BackButton = (props) => (
  <TouchableOpacity onPress={() => props.onBack() }>
    <Icon name={'angle-left'} size={30} color={'white'} />
  </TouchableOpacity>
)

export default BackButton
