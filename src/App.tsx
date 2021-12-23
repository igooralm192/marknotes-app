import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from './routes'
import store, { persistor } from './store'
import { nbTheme } from './themes'

const nbConfig = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
}

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider config={nbConfig} theme={nbTheme}>
          <Routes />
        </NativeBaseProvider>
      </PersistGate>
    </StoreProvider>
  )
}
export default App
