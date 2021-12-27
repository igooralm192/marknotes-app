import React from 'react'
import { IconButton as NBIconButton, useContrastText } from 'native-base'

import * as Ui from '@/components/ui'
import { IconButtonProps } from './types'

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  bg = 'primary.200',
  ...props
}) => {
  const iconContrastColor = useContrastText(bg as string)

  const Icon = icon && <Ui.Icon name={icon} color={iconContrastColor} />

  return <NBIconButton icon={Icon} {...props} />
}

export default IconButton
