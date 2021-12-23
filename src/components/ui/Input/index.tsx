import { Input as NBInput } from 'native-base'
import React from 'react'

import { InputProps } from './types'

const Input: React.FC<InputProps> = props => {
  return <NBInput px={4} fontSize={14} {...props} />
}

export default Input
