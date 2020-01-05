import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppPage } from 'components'
import { AuthForm } from 'containers'
import * as React from 'react'
import { useState } from 'react'
import { AsyncStorage, Button, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-paper'
import AuthScreen from 'screens/Guest/AuthScreen'

const AuthContext = React.createContext('session')

function SplashScreen() {
	return (
		<AppPage>
			<Text>Carregando...</Text>
		</AppPage>
	)
}

function HomeScreen({ navigation }) {
	const { signOut } = React.useContext(AuthContext)

	return (
		<View>
			<Text>Signed in!</Text>
			<Button title="Sign out" onPress={signOut} />
			<Button title="Sign out" onPress={() => navigation.navigate('About')} />
		</View>
	)
}

function AboutScreen({ navigation }) {
	return (
		<View>
			<Text>Signed in!</Text>
			<Button title="Sign out" onPress={() => navigation.goBack()} />
		</View>
	)
}

function SignInScreen({ navigation }) {
	const { signIn } = React.useContext(AuthContext)

	return (
		<AppPage padding>
			<AuthForm loading={false} onForgot={null} onSubmit={signIn} />
			<Button title="About" onPress={() => navigation.navigate('about')} />
		</AppPage>
	)
}

const Stack = createStackNavigator()

const NavBottom = () => {
	const [ Index, setIndex ] = useState({
		index: 0,
		routes: [
			{ key: 'home', title: 'Album', icon: 'image-album', color: '#f00' },
			{
				key: 'about',
				title: 'Library',
				icon: 'inbox',
				color: '#2962ff',
				badge: true,
			},
		],
	})

	return (
		<BottomNavigation
			navigationState={Index}
			onIndexChange={(index) => setIndex({ ...Index, index })}
			// @ts-ignore
			renderScene={BottomNavigation.SceneMap({
				home: HomeScreen,
				about: AboutScreen,
			})}
		/>
	)
}

function NavScreen() {
	return <NavBottom />
}

export default function App() {
	const [ state, dispatch ] = React.useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					}
				case 'SIGN_IN':
					return {
						...prevState,
						userToken: action.token,
					}
				case 'SIGN_OUT':
					return {
						...prevState,
						userToken: null,
					}
			}
		},
		{
			isLoading: true,
			userToken: null,
		},
	)

	React.useEffect(() => {
		// Fetch the token from storage then navigate to our appropriate place
		const bootstrapAsync = async () => {
			let userToken

			try {
				userToken = await AsyncStorage.getItem('userToken')
				console.log({ userToken })
			} catch (e) {
				// Restoring token failed
			}

			// After restoring token, we may need to validate it in production apps

			// This will switch to the App screen or Auth screen and this loading
			// screen will be unmounted and thrown away.
			dispatch({ type: 'RESTORE_TOKEN', token: userToken })
		}

		bootstrapAsync()
	}, [])

	const authContext = React.useMemo(
		() => ({
			signIn: async (data) => {
				console.log('signin', data)
				// In a production app, we need to send some data (usually username, password) to server and get a token
				// We will also need to handle errors if sign in failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
			},
			signOut: () => dispatch({ type: 'SIGN_OUT' }),
			signUp: async (data) => {
				// In a production app, we need to send user data to server and get a token
				// We will also need to handle errors if sign up failed
				// After getting token, we need to persist the token using `AsyncStorage`
				// In the example, we'll use a dummy token

				dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
			},
		}),
		[],
	)

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationNativeContainer>
				<Stack.Navigator headerMode="none">
					{state.isLoading ? (
						<Stack.Screen name="Splash" component={SplashScreen} />
					) : state.userToken == null ? (
						<Stack.Screen
							name="SignIn"
							component={AuthScreen}
							options={{
								title: 'Cadastre-se',
							}}
						/>
					) : (
						<Stack.Screen
							name="Tab"
							component={NavScreen}
							options={{
								title: 'Instagram',
							}}
						/>
					)}
				</Stack.Navigator>
			</NavigationNativeContainer>
		</AuthContext.Provider>
	)
}
