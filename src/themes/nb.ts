import { extendTheme } from 'native-base'

export const nbTheme = extendTheme({
  colors: {
    primary: {
      200: '#1b9bfc',
      300: '#1a9bfccc',
      500: '#1b9bfcb3',
      600: '#1b9bfc80',
      700: '#1b9bfc4d',
    },
    background: {
      500: '#21202C',
    },
    card: {
      500: '#3A384F',
      700: '#232230',
    },
    divider: {
      500: '#EAEAEA',
    },
    white: {
      500: '#FFFFFF',
    },
    black: {
      500: '#3C3C3C',
    },
    grey: {
      500: '#ACACAC',
    },
    success: {
      500: '#4ADE80',
    },
    error: {
      500: '#DD4848',
    },
  },
  fontConfig: {
    Roboto: {
      400: {
        normal: 'Roboto-Regular',
      },
      700: {
        normal: 'Roboto-Bold',
      },
    },
    Quicksand: {
      300: {
        normal: 'Quicksand-Light',
      },
      400: {
        normal: 'Quicksand-Regular',
      },
      500: {
        normal: 'Quicksand-Medium',
      },
      600: {
        normal: 'Quicksand-SemiBold',
      },
      700: {
        normal: 'Quicksand-Bold',
      },
    },
  },
  fonts: {
    heading: 'Quicksand',
    body: 'Quicksand',
    mono: 'Quicksand',
  },
  fontSizes: {
    '3xl': 32, // Header 1
    '2xl': 24, // Header 2
    xl: 20, // Subtitle 1
    lg: 16, // Subtitle 2
    md: 14, // Body
    sm: 12, // Label
    xs: 12, // Footnote
  },
  config: {
    initialColorMode: 'dark',
  },
})

type NBThemeType = typeof nbTheme

declare module 'native-base' {
  interface ICustomTheme extends NBThemeType {}
}
