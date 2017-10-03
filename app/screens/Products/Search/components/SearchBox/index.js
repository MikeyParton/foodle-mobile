import React from 'react'
import { Text, View, TextInput, Animated } from 'react-native'
import styled from 'styled-components/native'
import Cancel from './Cancel'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

const SearchInput = styled.TextInput`
  background-color: white;
  padding: 5px 15px 5px 15px;
  border-radius: 50px;
  flex: 1;
  margin-right: 10px;
`

class SearchBox extends React.Component {
  width = new Animated.Value(0)

  handleChange(event) {
    const newQuery = event.nativeEvent.text
    this.props.onQueryChange(newQuery)
  }

  handleFocus() {
    this.showCancel()
  }

  handleBlur() {
    this.hideCancel()
  }

  showCancel() {
    Animated.timing(this.width, {
      toValue: 1,
      duration: 500
    }).start()
  }

  hideCancel() {
    Animated.timing(this.width, {
      toValue: 0,
      duration: 500
    }).start()
  }

  render() {
    const { query } = this.props
    return (
      <Container>
        <SearchInput
          placeholder="Search for a product"
          value={query}
          onChange={(e) => this.handleChange(e)}
          onFocus={() => this.handleFocus()}
          onBlur={() => this.handleBlur()}
        />
        <Cancel width={this.width}/>
      </Container>
    )
  }
}

export default SearchBox
