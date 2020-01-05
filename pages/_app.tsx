import { ThemeHoc } from 'hocs/ThemeHoc'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from 'store'

const { store, persister } = configureStore(false, true)
export default ({ Component, pageProps }) => {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<PersistGate loading={<ActivityIndicator />} persistor={persister}>
					<ThemeHoc>
						<Component {...pageProps} />
					</ThemeHoc>
				</PersistGate>
			</Provider>
		</SafeAreaProvider>
	)
}
