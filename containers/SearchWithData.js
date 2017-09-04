import React from 'react'
import { graphql } from 'react-apollo'
import ingredientsQuery from './queries/ingredientsQuery'
import Search from '../components/Search'


const SearchWithData = graphql(ingredientsQuery)(Search)

export default SearchWithData
