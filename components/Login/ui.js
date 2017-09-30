import styled from 'styled-components/native'

export const Screen = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.Text`
  font-size: 40px;
  margin-bottom: 10px;
`

export const SubHeading = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`

export const LoginButton = styled.TouchableOpacity`
  flex: 0;
  width: 200px
  flex-direction: row;
  align-items: center;
  background-color: #3b5998;
  padding: 20px;
  border-radius: 20px;
`

export const ButtonText = styled.Text`
  margin-left: 10px;
  color: white;
`
