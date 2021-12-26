import { Pressable } from 'native-base'
import React from 'react'
import RNMarkdown from 'react-native-markdown-display'

import { nbTheme } from '@/themes'

import { MarkdownProps } from './types'

const Markdown: React.FC<MarkdownProps> = ({ text, onPress, ...props }) => {
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

export default Markdown
