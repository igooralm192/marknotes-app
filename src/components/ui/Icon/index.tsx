import { Icon as NBIcon, useToken } from 'native-base'
import React from 'react'
import { SvgProps } from 'react-native-svg'

import CloseIconSVG from '@/assets/svgs/icon-close.svg'
import PlusIconSVG from '@/assets/svgs/icon-plus.svg'
import SaveIconSVG from '@/assets/svgs/icon-save.svg'
import TrashIconSVG from '@/assets/svgs/icon-trash.svg'

import { defaultColors } from '@/themes'

import { IconName, IconProps } from './types'

const iconSVGMap: Record<IconName, React.FC<SvgProps>> = {
  close: CloseIconSVG,
  plus: PlusIconSVG,
  save: SaveIconSVG,
  trash: TrashIconSVG,
}

const Icon: React.FC<IconProps> = ({
  name,
  color = defaultColors.primary,
  size = 'md',
  ...props
}) => {
  const [colorToken] = useToken('colors', [color as string])
  const [sizeToken] = useToken('components.Icon.sizes', [size as string])

  return (
    <NBIcon
      as={React.createElement(iconSVGMap[name], {
        fill: colorToken,
        width: sizeToken,
        height: sizeToken,
      })}
      {...props}
    />
  )
}

export default Icon
