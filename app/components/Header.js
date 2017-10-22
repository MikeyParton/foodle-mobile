import React from 'react'
import styled from 'styled-components/native'

export default styled.View`
  background-color: ${props => props.theme.primaryLight}
  padding: 50px 20px 20px 20px;
  flex-direction: row
  justify-content: space-between;
  align-items: center;
`
