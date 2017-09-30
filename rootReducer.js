import { combineReducers } from 'redux'
import client from './config/apolloClient'
import login from './containers/Login/reducer'

const rootReducer = combineReducers({
  apollo: client.reducer(),
  login
})

export default rootReducer
