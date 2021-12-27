import { IIconProps } from 'native-base'

export type IconName = 'close' | 'plus'

export interface IconProps extends IIconProps {
  name: IconName
}
