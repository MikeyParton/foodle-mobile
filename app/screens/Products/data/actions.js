import { UPDATE_PRODUCTS_QUERY } from './constants'

export const updateProductsQuery = (query) => {
  return { type: UPDATE_PRODUCTS_QUERY, query }
}
