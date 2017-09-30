import { AsyncStorage } from 'react-native'
import { LOGGED_IN } from './constants'

const defaultState = {
  currentUser: null
}

const loggedIn = (state, action) => {
  const currentUser = action.user
  try {
    AsyncStorage.setItem('foodle_token', currentUser.token)
  } catch (error) {
    console.log('error stroring token', error)
  }
  return { ...state, currentUser }
}

const login = (state = defaultState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return loggedIn(state, action)
    default:
      return state
  }
}

export default login
