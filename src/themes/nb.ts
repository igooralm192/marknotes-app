import { extendTheme } from 'native-base'

export const nbTheme = extendTheme({
  components: {
    Icon: {
      sizes: {
        lg: 32,
        md: 20,
        sm: 14,
      },
    },
  },
  colors: {
    primary: {
      200: '#DDFB62',
      300: '#C2DC55',
      500: '#AAC149',
      600: '#8DA03B',
      700: '#6E7D30',
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

export type NBTheme = typeof nbTheme
export type NBThemeColors = keyof Pick<
  NBTheme['colors'],
  | 'primary'
  | 'background'
  | 'card'
  | 'divider'
  | 'white'
  | 'grey'
  | 'success'
  | 'error'
>

export const defaultColors: Record<NBThemeColors, string> = {
  primary: 'primary.200',
  background: 'background.500',
  card: 'card.500',
  divider: 'divider.500',
  white: 'white.500',
  grey: 'grey.500',
  success: 'success.500',
  error: 'error.500',
}

declare module 'native-base' {
  interface ICustomTheme extends NBTheme {}
}
