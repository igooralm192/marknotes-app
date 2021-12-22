import { extendTheme } from 'native-base'

export const nbTheme = extendTheme({
  colors: {
    primary: {
      200: '#F9CCCC',
      300: '#F5A8A8',
      500: '#F67777',
      600: '#E17070',
      700: '#D16363',
    },
    background: {
      500: '#21202C',
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
    xl: 36, // Header
    lg: 20, // Subtitle
    md: 14, // Body
    sm: 12, // Label
    xs: 12, // Footnote
  },
  config: {
    initialColorMode: 'dark',
  },
})

type NbThemeType = typeof nbTheme

declare module 'native-base' {
  interface ICustomTheme extends NbThemeType {}
}
