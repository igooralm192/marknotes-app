import { Text, Theme } from 'native-base'
import React from 'react'

import { TypographyProps, TypographyVariant } from './types'

type NbFontSizes = keyof Theme['fontSizes']
type NbFontWeights = keyof Theme['fontWeights']

const nbFontSizesMap: Record<TypographyVariant, NbFontSizes> = {
  header: 'xl',
  subtitle: 'lg',
  body: 'md',
  label: 'sm',
  footnote: 'xs',
}

const nbFontWeightsMap: Record<TypographyVariant, NbFontWeights> = {
  header: 'bold',
  subtitle: 'bold',
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
