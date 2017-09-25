import { combineReducers } from 'redux'
import client from './config/apolloClient'
import Login from './containers/Login/reducer'

const rootReducer = combineReducers({
  apollo: client.reducer(),
  Login
})

export default rootReducer
