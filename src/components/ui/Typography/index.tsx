import { Text, Theme } from 'native-base'
import React from 'react'

import { TypographyProps, TypographyVariant } from './types'

type NBFontSizes = keyof Theme['fontSizes']
type NBFontWeights = keyof Theme['fontWeights']

const nbFontSizesMap: Record<TypographyVariant, NBFontSizes> = {
  h1: '3xl',
  h2: '2xl',
  subtitle1: 'xl',
  subtitle2: 'lg',
  body: 'md',
  label: 'sm',
  footnote: 'xs',
}

const nbFontWeightsMap: Record<TypographyVariant, NBFontWeights> = {
  h1: 'bold',
  h2: 'bold',
  subtitle1: 'bold',
  subtitle2: 'normal',
  body: 'normal',
  label: 'bold',
  footnote: 'light',
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  ...props
}) => {
  return (
    <Text
      fontSize={nbFontSizesMap[variant]}
      fontWeight={nbFontWeightsMap[variant]}
      {...props}
    />
  )
}

export default Typography
