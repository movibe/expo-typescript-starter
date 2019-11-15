import React from 'react'
import { ActivityIndicator } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { configureStore } from 'store'
import { Navigator } from 'screens'
import { client } from 'server'
import 'locales'

const { store, persister } = configureStore(false, true)

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persister}>
        <Navigator />
      </PersistGate>
    </Provider>
  </ApolloProvider>
)
