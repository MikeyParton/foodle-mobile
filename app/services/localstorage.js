import { AsyncStorage } from 'react-native'

const localstorage = {
  getItem: async (key) => {
    const value = await AsyncStorage.getItem(key)
    return value
  },
  setItem: (key, value) => {
    AsyncStorage.setItem(key, value)
  }
}

export default localstorage
