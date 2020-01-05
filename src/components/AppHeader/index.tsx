import * as React from 'react'
import { SearchBar } from 'react-native-elements'
import { Appbar } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { IAppState } from 'store/types'
import { darkTheme, ITheme, lightTheme } from 'theme'

export interface AppHeaderButton {
  title?: string
  icon?: string
  action?: any
}

interface IProps {
  search?: boolean
  searchValue?: string
  onBack?: () => void
  leftText?: string
  navigation?: any
  title?: string
  right?: AppHeaderButton[]
  theme?: ITheme
}

export const AppHeader: React.FC<IProps> = ({ onBack, title, search }) => {
  const theme = useSelector((state: IAppState) => state.app.theme)

  const _theme = theme.dark ? darkTheme : lightTheme

  if (search) {
    return (
      <Appbar.Header style={{ backgroundColor: _theme.colors.background }}>
        {onBack && <Appbar.BackAction onPress={onBack} />}

        <SearchBar placeholder={'Search'} />
      </Appbar.Header>
    )
  }

  if (title)
    return (
      <Appbar.Header style={{ backgroundColor: _theme.colors.background }}>
        {onBack && <Appbar.BackAction onPress={onBack} />}

        <Appbar.Content title={title} />
      </Appbar.Header>
    )
  return null
}
