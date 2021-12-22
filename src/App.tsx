import { NativeBaseProvider } from 'native-base'
import React from 'react'

import Routes from './routes'
import { nbTheme } from './themes'

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
}

const App = () => {
  return (
    <NativeBaseProvider config={config} theme={nbTheme}>
      <Routes />
    </NativeBaseProvider>
  )
}
export default App
