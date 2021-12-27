import { IIconProps } from 'native-base'

export type IconName = 'close' | 'plus' | 'save' | 'trash'

export interface IconProps extends IIconProps {
  name: IconName
}
