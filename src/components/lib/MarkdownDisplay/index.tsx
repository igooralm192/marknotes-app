import { Pressable } from 'native-base'
import React from 'react'
import RNMarkdown from 'react-native-markdown-display'

import { nbTheme } from '@/themes'

import { MarkdownDisplayProps } from './types'

const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({
  text,
  onPress,
  ...props
}) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <RNMarkdown
        style={{
          body: {
            color: nbTheme.colors.white[500],
            fontSize: nbTheme.fontSizes.lg,
            fontFamily: nbTheme.fontConfig.Quicksand[500].normal,
          },
          paragraph: {
            marginTop: 0,
            marginBottom: 0,
          },
        }}>
        {text}
      </RNMarkdown>
    </Pressable>
  )
}

export default MarkdownDisplay
