import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import ProductIngredients from './components/ProductIngredients'
import PRODUCT_INGREDIENTS_QUERY from './data/productIngredientsQuery'

const mapStateToProps = (state, ownProps) => {
  return {
    barcode: '9310055536333'
  }
}

const ProductIngredientsWithData = graphql(PRODUCT_INGREDIENTS_QUERY, {
  options: ({ barcode }) => ({ variables: { barcode: barcode } })
})(ProductIngredients)

export default connect(
  mapStateToProps,
  null
)(ProductIngredientsWithData)
