import styled from 'styled-components/native'
import { IStyled } from 'theme'

interface IContainer extends IStyled {
  padding?: boolean
}
export const Container = styled.View<IContainer>`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: ${(props)=> props.padding ? '10px' : '0px'};
`
