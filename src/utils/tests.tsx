import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { render } from '@testing-library/react-native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider as StyledProvider } from 'styled-components/native'

import { NotesProvider } from '@/contexts'
import { RouteStackParamList } from '@/routes/types'
import store from '@/stores'
import { nbTheme } from '@/themes'

export const ThemeProvider: React.FC = ({ children }) => {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  }

  return (
    <StyledProvider theme={nbTheme}>
      <NativeBaseProvider initialWindowMetrics={inset} theme={nbTheme}>
        {children}
      </NativeBaseProvider>
    </StyledProvider>
  )
}

export const StoreProvider: React.FC = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export const Providers: React.FC = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <NotesProvider>{children}</NotesProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

export const renderWithProviders = (
  Component: React.FC<NativeStackScreenProps<RouteStackParamList, any>>,
  routeParams?: Record<string, any>,
) => {
  return render(
    <Component route={{ params: routeParams } as any} navigation={{} as any} />,
    {
      wrapper: (props: any) => <Providers {...props} />,
    },
  )
}
