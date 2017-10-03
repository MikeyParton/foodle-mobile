import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import Search from './components'
import { updateProductsQuery } from './data/actions'
import PRODUCTS_QUERY from './data/productsQuery'

const mapStateToProps = state => {
  return {
    query: state.products.query
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProductsQuery (query) {
      dispatch(updateProductsQuery(query))
    }
  }
}

const SearchWithData = graphql(PRODUCTS_QUERY, {
  options: ({ query }) => ({ variables: { query: query } })
})(Search)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWithData)
