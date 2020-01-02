import * as React from 'react'
import { ActivityIndicator, Platform, StatusBar, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Auth from './Guest'

class AuthLoadingScreen extends React.Component {
	// componentDidMount() {
	// 	this._bootstrapAsync()
	// }

	// // Fetch the token from storage then navigate to our appropriate place
	// _bootstrapAsync = async () => {
	// 	const userToken = await AsyncStorage.getItem('userToken')

	// 	// This will switch to the App screen or Auth screen and this loading
	// 	// screen will be unmounted and thrown away.
	// 	this.props.navigation.navigate(userToken ? 'Main' : 'Auth')
	// }

	// Render any loading content that you like here
	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
				<Text>Fala sério...</Text>
			</View>
		)
	}
}

const Main = () => (
	<View>
		<Text>Loading...</Text>
	</View>
)

const AppSwitchNavigator = createSwitchNavigator(
	{
		AuthLoading: { screen: AuthLoadingScreen, path: '' },
		Auth,
		Main: { screen: Main, path: 'main' },
		Error: Main,
	},
	{
		initialRouteName: 'AuthLoading',
		navigationOptions: { header: null, gesturesEnabled: false },
	},
)

const createApp = Platform.select({
	// web: (config) => createBrowserApp(config, { history: 'hash' }),
	// web: (config) => createBrowserApp(config),
	default: (config) => createAppContainer(config),
})

export default createApp(AppSwitchNavigator)
