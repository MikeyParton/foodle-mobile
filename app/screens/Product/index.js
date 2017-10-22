import React from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import Product from './components'
import PRODUCT_QUERY from './data/productQuery'

const mapStateToProps = (state, ownProps) => ({
  barcode: ownProps.navigation.state.params.barcode
})

const ProductWithData = graphql(PRODUCT_QUERY, {
  options: ({ barcode }) => ({ variables: { barcode: barcode } })
})(Product)

export default connect(
  mapStateToProps,
  null
)(ProductWithData)
