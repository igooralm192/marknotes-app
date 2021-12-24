import {
  NavigationContainer,
  NavigationProp,
  useNavigation as useReactNavigation,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { HomeScreen, AddNoteScreen, EditNoteScreen } from '@/screens'
import { RouteStackParamList } from './types'

const Stack = createNativeStackNavigator<RouteStackParamList>()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AddNoteScreen"
          component={AddNoteScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="EditNoteScreen"
          component={EditNoteScreen}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const useNavigation = () =>
  useReactNavigation<NavigationProp<RouteStackParamList>>()

export default Routes
