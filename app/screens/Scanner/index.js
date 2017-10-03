import React from 'react'
import { View, Text, Alert } from 'react-native'
import Camera from 'react-native-camera'
import styled from 'styled-components/native'

const overlayOpacity = 0.5

const TopAndBottom = styled.View`
  flex: 1;
  width: 100%;
  background-color: black;
  opacity: ${overlayOpacity};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Sides = styled.View`
  flex: 1;
  background-color: black;
  opacity: ${overlayOpacity};
`

const RectangleRow = styled.View`
  flex-shrink: 0;
  display: flex;
  height: 200px;
  flex-direction: row;
`

const Rectangle = styled.View`
  flex-shrink: 0;
  width: 250px;
  border-width: 2;
  border-color: white;
`

const Instructions = styled.Text`
  color: white;
`

class Scanner extends React.Component {
  onScan(event, bounds) {
    Alert.alert(
      'Barcode Found!',
      event.data,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false }
    )
  }
  render() {
    return(
      <View style={{flex: 1}}>
        <Camera
          ref={(cam) => {this.camera = cam}}
          onBarCodeRead={(event) => this.onScan(event)}
          style={{flex: 1, flexDirection: 'column'}}
          aspect={Camera.constants.Aspect.fill}>
          <TopAndBottom>
            <Instructions>Scan the product barcode</Instructions>
          </TopAndBottom>
          <RectangleRow>
            <Sides/>
            <Rectangle/>
            <Sides/>
          </RectangleRow>
          <TopAndBottom/>
        </Camera>
      </View>
    )
  }
}

export default Scanner
