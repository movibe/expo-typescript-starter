import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import React from 'react'
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance'
import { Provider as PaperProvider } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { AppThemeChange } from 'store/app/actions'
import { IAppState } from 'store/types'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'theme'

export const ThemeHoc: React.FC = ({ children }) => {
	const colorScheme = useColorScheme()
	const dispatch = useDispatch()
	const isDark = useSelector((state: IAppState) => state.app.theme)

	const changeTheme = (colorScheme) => {
		dispatch(AppThemeChange(colorScheme === 'dark' ? darkTheme : lightTheme))
	}

	React.useEffect(() => {
		const themeSubscription = Appearance.addChangeListener(({ colorScheme }) => changeTheme(colorScheme))
		changeTheme(colorScheme)
		return () => {
			themeSubscription.remove()
		}
	})

	const _theme = isDark.dark ? darkTheme : lightTheme

	return (
		<AppearanceProvider>
			<ActionSheetProvider>
				<PaperProvider theme={_theme}>
					<ThemeProvider theme={_theme.colors}>{children}</ThemeProvider>
				</PaperProvider>
			</ActionSheetProvider>
		</AppearanceProvider>
	)
}
