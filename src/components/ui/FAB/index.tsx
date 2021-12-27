import { Fab, useContrastText } from 'native-base'
import React from 'react'

import * as Ui from '@/components/ui'
import { FABProps } from './types'

const FAB: React.FC<FABProps> = ({ icon, bg = 'primary.200', ...props }) => {
  const iconContrastColor = useContrastText(bg as string)

  const Icon = icon && <Ui.Icon name={icon} color={iconContrastColor} />

  return <Fab right={6} bottom={12} icon={Icon} bg={bg} {...props} />
}

export default FAB
