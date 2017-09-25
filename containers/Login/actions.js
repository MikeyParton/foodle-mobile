import { LOGGED_IN } from './constants'

export const loggedIn = (user) => {
  return { type: LOGGED_IN,  user}
}
