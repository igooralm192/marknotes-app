import { render } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Provider } from 'react-redux'

import store from '@/store'
import { nbTheme } from '@/themes'

export const ThemeProvider: React.FC = ({ children }) => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  }

  return (
    <NativeBaseProvider initialWindowMetrics={inset} theme={nbTheme}>
      {children}
    </NativeBaseProvider>
  )
}

export const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export const Providers: React.FC = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  )
}

export const renderWithProviders = (Component: React.ReactElement) => {
  return render(Component, { wrapper: Providers })
}
