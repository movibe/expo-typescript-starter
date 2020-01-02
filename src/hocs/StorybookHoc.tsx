import * as React from 'react'
import { useSelector } from 'react-redux'
import { IAppState } from 'store/types'
import { lightTheme, darkTheme } from 'theme'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components/native'
import { Container } from 'components'

interface Props {
	children: any
	padding?: boolean
}
export const StorybookHoc: React.FC<Props> = ({ padding, children }) => {
	const theme = useSelector((state: IAppState) => state.app.theme)
	const _theme = theme.dark ? darkTheme : lightTheme
	return (
		<PaperProvider theme={_theme}>
			<ThemeProvider theme={_theme.colors}>
				<Container padding={padding}>
					{children}
					</Container>
				</ThemeProvider>
		</PaperProvider>
	)
}
