import 'locales'

import { LanguageHoc, ThemeHoc } from 'hocs'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Screens from 'screens'
import { client } from 'server'
import { configureStore } from 'store'

const { store, persister } = configureStore(false, true)

export const App: React.FC = () => (
	<ApolloProvider client={client}>
		<Provider store={store}>
			<PersistGate loading={<ActivityIndicator />} persistor={persister}>
				<ThemeHoc>
					<LanguageHoc>
						<Screens />
					</LanguageHoc>
				</ThemeHoc>
			</PersistGate>
		</Provider>
	</ApolloProvider>
)
