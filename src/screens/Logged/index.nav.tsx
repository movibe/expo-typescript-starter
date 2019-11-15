import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'

export default createStackNavigator(
	{
		HomeScreen: { screen: HomeScreen, path: '/home' }
	},
	{
		initialRouteName: 'HomeScreen',
		headerMode: 'none'
	}
)
