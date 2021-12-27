import { IFabProps } from 'native-base'

import { IconName } from '../Icon/types'

export interface FABProps extends Omit<IFabProps, 'icon'> {
  icon?: IconName
}
