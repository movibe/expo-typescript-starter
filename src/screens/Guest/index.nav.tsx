import { createStackNavigator } from 'react-navigation-stack'
import AuthScreen from './AuthScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotScreen from './ForgotScreen'
import TermScreen from './TermScreen'

export default createStackNavigator(
  {
``    AuthScreen: { screen: AuthScreen, path: '' },
    LoginScreen: { screen: LoginScreen, path: 'login' },
    RegisterScreen: { screen: RegisterScreen, path: 'register' },
    ForgotScreen: { screen: ForgotScreen, path: 'forgot' },
    TermScreen: { screen: TermScreen, path: 'terms' }
  },
  {
    initialRouteName: 'AuthScreen',
    headerMode: 'none'
  }
)
