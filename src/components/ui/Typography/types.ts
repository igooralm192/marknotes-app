import { ITextProps } from 'native-base'

export type TypographyVariant =
  | 'header'
  | 'subtitle'
  | 'body'
  | 'footnote'
  | 'label'

export interface TypographyProps extends ITextProps {
  variant?: TypographyVariant
}
