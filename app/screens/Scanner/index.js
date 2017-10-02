import React from 'react'
import { View, Text } from 'react-native'
// import Camera from 'react-native-camera'

class Scanner extends React.Component {
  render() {
    return(
      <View>
        {/* <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text>Scanner</Text>
        </Camera> */}
      </View>
    )
  }
}

export default Scanner
