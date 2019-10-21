import { IStyled } from 'theme'

export interface AppHeaderButton {
  title?: string
  icon?: string
  action?: any
}

export interface IProps extends IStyled {
  search?: boolean
  searchValue?: string
  back?: boolean
  leftText?: string
  navigation?: any
  title?: string
  right?: AppHeaderButton[]
}
