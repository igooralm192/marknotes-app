import { Input as NBInput } from 'native-base'
import React from 'react'
import { TextInput } from 'react-native'

import { InputProps } from './types'

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  props,
  ref,
) => {
  return <NBInput ref={ref} px={4} fontSize="md" fontFamily="body" {...props} />
}

export default React.forwardRef(Input)
