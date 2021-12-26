import { MarkdownProps as RNMarkdownProps } from 'react-native-markdown-display'

export interface MarkdownProps extends RNMarkdownProps {
  text: string
  onPress?: () => void
}
