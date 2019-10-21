import { createStackNavigator } from 'react-navigation-stack'
import AuthScreen from './AuthScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotScreen from './ForgotScreen'
import TermScreen from './TermScreen'

export default createStackNavigator(
  {
    AuthScreen: { screen: AuthScreen, path: 'auth' },
    LoginScreen: { screen: LoginScreen, path: 'login' },
    RegisterScreen: { screen: RegisterScreen },
    ForgotScreen: { screen: ForgotScreen },
    TermScreen: { screen: TermScreen }
  },
  {
    initialRouteName: 'AuthScreen',
    headerMode: 'none'
  }
)
