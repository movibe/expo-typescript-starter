import { NavigationActions } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { BackHandler, Alert } from 'react-native'
import routes from './routes'
import { lightTheme, darkTheme } from 'theme'
import { IAppState } from 'store/types'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components/native'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { AppThemeChange } from 'store/app/actions'
import {
  Appearance,
  useColorScheme,
  AppearanceProvider
} from 'react-native-appearance'
import { useIsAuthenticated } from 'hocs'

export const routerMiddleware = createReactNavigationReduxMiddleware(
  (state: any) => state
)

const App: any = createReduxContainer(routes, 'root')

export const Navigator: React.FC = () => {
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()
  const isDark = useSelector((state: IAppState) => state.app.theme)
  const [Dark, setDark] = useState(colorScheme)
  const nav = useSelector((state: IAppState) => state.nav)
  const { t } = useTranslation()
  const authenticated = useIsAuthenticated()

  const changeTheme = colorScheme => {
    dispatch(AppThemeChange(colorScheme === 'dark' ? darkTheme : lightTheme))
  }

  React.useEffect(() => {
    changeTheme(colorScheme)
    const themeSubscription = Appearance.addChangeListener(({ colorScheme }) =>
      setDark(colorScheme)
    )
    console.log('authenticated', authenticated)

    return () => {
      themeSubscription.remove()
    }
  }, [Dark])

  const onBackPress = () => {
    if (nav.index === 0) {
      Alert.alert(
        t('closeApp.title'),
        t('closeApp.message'),
        [
          {
            onPress: () => BackHandler.exitApp(),
            text: t('yes')
          },
          {
            style: 'cancel',
            text: t('cancel')
          }
        ],
        { cancelable: false }
      )
    }
    dispatch(NavigationActions.back())

    return true
  }

  const _theme = isDark.dark ? darkTheme : lightTheme
  console.log({
    isDark,
    _theme
  })
  return (
    <AppearanceProvider>
      <PaperProvider theme={_theme}>
        <ThemeProvider theme={_theme.colors}>{children}</ThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  )
}
