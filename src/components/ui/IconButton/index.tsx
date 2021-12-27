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
  const iconContrastColor = useContrastText(
    defaultColors[colorScheme as NBThemeColors],
  )

  const ContrastIcon = icon ? <Icon name={icon} /> : undefined

  return (
    <NBIconButton
      _icon={{
        color: iconContrastColor,
      }}
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
