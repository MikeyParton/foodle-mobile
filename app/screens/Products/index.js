import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import SearchBox from './components/SearchBox'

const Header = styled.View`
  background-color: ${props => props.theme.primaryLight}
  padding: 50px 20px 20px 20px;
`

const HeaderText = styled.Text`
  color: white;
  text-align: center;
`

class Products extends React.Component {
  constructor(props) {
    super()

    this.state = {
      query: '',
      active: false
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    const query = event.nativeEvent.text
    this.setState({ query })
  }

  handleFocus() {
    console.log('sdfsndflksndflksndlkfns')
    this.setState({ active: true })
  }

  handleBlur() {
    this.setState({ active: false })
  }

  render() {
    const { query, active } = this.state
    return(
      <Header>
        <HeaderText>Products</HeaderText>
        <SearchBox
          active={active}
          query={query}
          handleChange={this.handleChange}
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}
        />
      </Header>
    )
  }
}

export default Products
