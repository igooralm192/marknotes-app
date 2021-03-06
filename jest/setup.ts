import '@testing-library/jest-native/extend-expect'
import MockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('@react-navigation/native', () => {
  const navigationActual = jest.requireActual('@react-navigation/native')

  return {
    ...navigationActual,
    useNavigation: jest.fn(),
  }
})

jest.mock('@react-native-async-storage/async-storage', () => MockAsyncStorage)

jest.mock('redux-persist', () => {
  const persistActual = jest.requireActual('redux-persist')
  return {
    ...persistActual,
    persistReducer: jest.fn((_, reducers) => reducers),
    persistStore: jest.fn(),
  }
})

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

export {}
