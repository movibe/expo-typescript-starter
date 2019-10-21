import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './HomeScreen'

export default createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen }
    // Insert screen here
  },
  {
    headerMode: 'none'
  }
)
