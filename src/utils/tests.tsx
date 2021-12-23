import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { render } from '@testing-library/react-native'

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

export const Providers: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export const renderWithProviders = (Component: React.ReactElement) => {
  return render(Component, { wrapper: Providers })
}
