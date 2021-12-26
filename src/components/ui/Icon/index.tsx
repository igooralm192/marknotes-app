import { Icon as NBIcon } from 'native-base'
import React from 'react'

import PlusIconSVG from '@/assets/svgs/icon-plus.svg'

import { IconName, IconProps } from './types'

const iconSVGMap: Record<IconName, React.FC> = {
  plus: PlusIconSVG,
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return <NBIcon as={iconSVGMap[name]} {...props} />
}

export default Icon
