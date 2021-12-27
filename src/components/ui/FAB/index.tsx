import { Fab, useContrastText } from 'native-base'
import React from 'react'

import { NBThemeColors, defaultColors } from '@/themes'

import Icon from '../Icon'
import { FABProps } from './types'

const FAB: React.FC<FABProps> = ({
  icon,
  colorScheme = 'primary',
  ...props
}) => {
  const iconContrastColor = useContrastText(
    defaultColors[colorScheme as NBThemeColors],
  )

  const ContrastIcon = icon && <Icon name={icon} color={iconContrastColor} />

  return (
    <Fab
      right={6}
      bottom={12}
      icon={ContrastIcon}
      colorScheme={colorScheme}
      {...props}
    />
  )
}

export default FAB
