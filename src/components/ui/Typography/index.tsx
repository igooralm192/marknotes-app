import { Text, Theme } from 'native-base'
import React from 'react'

import { TypographyProps, TypographyVariant } from './types'

type NBFontSizes = keyof Theme['fontSizes']
type NBFontWeights = keyof Theme['fontWeights']

const nbFontSizesMap: Record<TypographyVariant, NBFontSizes> = {
  header: 'xl',
  subtitle: 'lg',
  body: 'md',
  label: 'sm',
  footnote: 'xs',
}

const nbFontWeightsMap: Record<TypographyVariant, NBFontWeights> = {
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
