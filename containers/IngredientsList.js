import React from 'react'
import { graphql } from 'react-apollo'
import ingredientsQuery from './queries/ingredientsQuery'
import IngredientsList from '../components/IngredientsList'


const IngredientsListWithData = graphql(ingredientsQuery)(IngredientsList)

export default IngredientsListWithData
