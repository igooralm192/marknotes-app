import { Fab } from 'native-base'
import React from 'react'

import { FABProps } from './types'

const FAB: React.FC<FABProps> = props => {
  return <Fab right={6} bottom={12} {...props} />
}

export default FAB
