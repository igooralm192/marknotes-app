import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider as StyledProvider } from 'styled-components/native'

import { NotesProvider } from './contexts'
import Routes from './routes'
import store, { persistor } from './stores'
import { nbTheme } from './themes'

const nbConfig = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
}

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledProvider theme={nbTheme}>
          <NativeBaseProvider config={nbConfig} theme={nbTheme}>
            <NotesProvider>
              <Routes />
            </NotesProvider>
          </NativeBaseProvider>
        </StyledProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
export default App
