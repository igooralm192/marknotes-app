import { Icon as NBIcon, useToken } from 'native-base'
import React from 'react'
import { SvgProps } from 'react-native-svg'

import CloseIconSVG from '@/assets/svgs/icon-close.svg'
import PlusIconSVG from '@/assets/svgs/icon-plus.svg'

import { IconName, IconProps } from './types'

const iconSVGMap: Record<IconName, React.FC<SvgProps>> = {
  close: CloseIconSVG,
  plus: PlusIconSVG,
}

const Icon: React.FC<IconProps> = ({
  name,
  color = 'primary.200',
  ...props
}) => {
  const [colorToken] = useToken('colors', [color as string])

  return (
    <NBIcon
      as={React.createElement(iconSVGMap[name], { fill: colorToken })}
      {...props}
    />
  )
}

export default Icon
