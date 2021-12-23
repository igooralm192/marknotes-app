import '@testing-library/jest-native/extend-expect'

jest.mock('@react-navigation/native', () => {
  const navigationActual = jest.requireActual('@react-navigation/native')

  return {
    ...navigationActual,
    useNavigation: jest.fn(),
  }
})

export {}
