import { LOGGED_IN } from './constants'

const defaultState = {
  currentUser: null
}

const loggedIn = (state, action) => {
  return { ...state, currentUser: action.user }
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
