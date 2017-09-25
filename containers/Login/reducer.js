import { LOGGED_IN } from './constants'

const defaultState = {
  currentUser: null
}

const loggedIn = (state, action) => {
  console.log('yay')
}

const login = (state = defaultState, action) => {
  console.log('in this part')
  switch (action.type) {
    case LOGGED_IN:
      return loggedIn(state, action)
    default:
      return state
  }
}

export default login
