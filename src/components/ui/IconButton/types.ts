import { IIconButtonProps } from 'native-base'

import { IconName } from '../Icon/types'

export interface IconButtonProps extends Omit<IIconButtonProps, 'icon'> {
  icon?: IconName
}
