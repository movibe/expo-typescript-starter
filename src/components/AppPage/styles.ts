import styled from 'styled-components/native'
import { IStyled } from 'theme'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: IStyled) => props.theme.background};
`
export const Header = styled.View`
  
`

interface ContentProps extends IStyled {
  padding?: boolean
}
export const Content = styled.View<ContentProps>`
  flex: 1;
  background-color: ${(props: ContentProps) => props.theme.background};
  padding: ${(props: ContentProps) => props.padding ? '10px' : '0px'};
`

export const ScrollContent = styled.ScrollView`
  flex: 1;
`