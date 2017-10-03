import { combineReducers } from 'redux'
import client from './apolloClient'
import login from './screens/Login/data/reducer'
import products from './screens/Search/data/reducer'

const rootReducer = combineReducers({
  apollo: client.reducer(),
  login,
  products
})

export default rootReducer
