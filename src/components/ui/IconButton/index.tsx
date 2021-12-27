import React from 'react'
import { IconButton as NBIconButton, useContrastText } from 'native-base'

import { NBThemeColors, defaultColors } from '@/themes'

import Icon from '../Icon'
import { IconButtonProps } from './types'

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  colorScheme = 'primary',
  ...props
}) => {
  const defaultColor = defaultColors[colorScheme as NBThemeColors]
  const iconContrastColor = useContrastText(defaultColor)

  const ContrastIcon = icon ? <Icon name={icon} size="sm" /> : undefined

  return (
    <NBIconButton
      _icon={{
        color: iconContrastColor,
      }}
      bg={defaultColor}
      icon={ContrastIcon}
      variant="solid"
      colorScheme={colorScheme}
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  )
}

export default IconButton
