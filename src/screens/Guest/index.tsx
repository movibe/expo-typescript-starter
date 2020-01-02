import { createStackNavigator } from 'react-navigation-stack';
import AuthScreen from './AuthScreen/index';
import ForgotScreen from './ForgotScreen/index';
import LoginScreen from './LoginScreen/index';
import TermScreen from './TermScreen/index';
import RegisterScreen from './RegisterScreen/index';

export default createStackNavigator(
	{
		AuthScreen,
		RegisterScreen,
		ForgotScreen,
		LoginScreen,
		TermScreen
	},
	{
		navigationOptions: { header: null, gesturesEnabled: false }
	}
);
