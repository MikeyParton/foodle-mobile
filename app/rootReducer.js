import { combineReducers } from 'redux'
import client from './apolloClient'
import login from './screens/Login/data/reducer'

const rootReducer = combineReducers({
  apollo: client.reducer(),
  login
})

export default rootReducer
