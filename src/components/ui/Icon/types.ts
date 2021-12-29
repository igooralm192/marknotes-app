import { IIconProps } from 'native-base'

export type IconName = 'close' | 'plus' | 'save' | 'search' | 'trash'

export interface IconProps extends IIconProps {
  name: IconName
}
