import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import { IStyled } from 'theme'

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${(props: IStyled) => props.theme.background};
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`

export const Left = styled.View`
  width: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const Right = styled.View`
  width: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Link = styled.TouchableOpacity``

export const Center = styled.View`
  flex: 5;
`

export const CenterTitle = styled.Text`
  color: ${(props: IStyled) => props.theme.text};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`

export const Search = styled.View`
  background-color: ${(props: IStyled) => props.theme.surface};
  flex: 1;
  margin: 0 10px;
  border-radius: 10px;
  flex-direction: row;
  padding: 0 10px;
  elevation: 4;
  align-items: center;
`

export const SearchInput = styled.TextInput.attrs((props: IStyled) => ({
  placeholderTextColor: props.theme.placeholder
}))`
  color: ${(props: IStyled) => props.theme.text};
`
