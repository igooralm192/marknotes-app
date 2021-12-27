import { Fab, useContrastText } from 'native-base'
import React from 'react'

import Icon from '../Icon'
import { FABProps } from './types'

const FAB: React.FC<FABProps> = ({ icon, bg = 'primary.200', ...props }) => {
  const iconContrastColor = useContrastText(bg as string)

  const FABIcon = icon && <Icon name={icon} color={iconContrastColor} />

  return <Fab right={6} bottom={12} icon={FABIcon} bg={bg} {...props} />
}

export default FAB
