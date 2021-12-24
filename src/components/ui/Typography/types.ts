import { ITextProps } from 'native-base'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'subtitle1'
  | 'subtitle2'
  | 'body'
  | 'footnote'
  | 'label'

export interface TypographyProps extends ITextProps {
  variant?: TypographyVariant
}
