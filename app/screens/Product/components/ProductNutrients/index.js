import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import ProductNutrients from './components/ProductNutrients'
import PRODUCT_NUTRIENTS_QUERY from './data/productNutrientsQuery'

const mapStateToProps = (state, ownProps) => {
  return {
    barcode: '9310055536333'
  }
}

const ProductNutrientsWithData = graphql(PRODUCT_NUTRIENTS_QUERY, {
  options: ({ barcode }) => ({ variables: { barcode: barcode, serving: null } })
})(ProductNutrients)

export default connect(
  mapStateToProps,
  null
)(ProductNutrientsWithData)
