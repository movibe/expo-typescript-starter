import { AppHeader } from 'components'
import * as React from 'react'
import { withTheme } from 'styled-components/native'

import { Container, Content, Header, ScrollContent } from './styles'
import { IStyled } from 'theme'

interface IProps extends IStyled {
  children: React.ReactNode
  header?: JSX.Element
  padding?: boolean
  scroll?: boolean
  navigation?: any
  headerLeft?: any
  title?: string
  headerRight?: any
  headerAnim?: string
  headerEndAnim?: () => void
  onBack?: () => void
  headerAnimDuration?: number
  headerAnimDelay?: number

  contentAnim?: string
  contentAnimDuration?: number
  contentAnimDelay?: number

  search?: boolean
}
class AppPageComponent extends React.PureComponent<IProps> {
  static defaultProps = {
    headerAnim: 'fadeInDown',
    headerAnimDuration: 500,
    headerAnimDelay: 0,
    contentAnim: 'fadeInUp',
    contentAnimDuration: 500,
    contentAnimDelay: 0
  }
  header?: any
  content?: any

  navigate = async (route?: string, params?: any) => {
    const { headerAnim, contentAnim, navigation } = this.props
    if (headerAnim && contentAnim) {
      await Promise.all([this.header.fadeOutUp(), this.content.fadeOut()])
    } else {
      if (headerAnim) await this.header.fadeOutUp()
      if (contentAnim) await this.header.fadeOutDown()
    }
    // navigation.goBack()

    route && route !== ''
      ? navigation.navigate(route, params)
      : navigation.goBack()
  }

  renderHeader = () => {
    const { search, title, onBack } = this.props

    return <AppHeader title={title} search={search} onBack={onBack} />
  }

  render(): JSX.Element {
    const { scroll, children, header, padding } = this.props
    return (
      <Container>
        <Header>{header ? header : this.renderHeader()}</Header>
        <Content padding={padding}>
          {scroll ? <ScrollContent>{children}</ScrollContent> : children}
        </Content>
      </Container>
    )
  }
}

export const AppPage = withTheme(AppPageComponent)
