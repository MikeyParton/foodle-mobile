import { UPDATE_PRODUCTS_QUERY } from './constants'

defaultState = {
  query: ''
}

const products = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS_QUERY:
      return { ...state, query: action.query }
    default:
      return state
  }
}

export default products
