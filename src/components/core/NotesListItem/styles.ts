import { Box, Pressable } from 'native-base'
import styled from 'styled-components/native'

import * as Ui from '@/components/ui'
import * as Lib from '@/components/lib'

export const Container = styled(Pressable)``

export const Card = styled(Box).attrs({
  position: 'relative',
  my: 4,
  p: 4,
  width: '100%',
  borderRadius: 16,
  bg: {
    linearGradient: {
      colors: ['card.500', 'card.700'],
      start: [0, 0],
      end: [0, 1],
    },
  },
})``

export const Title = styled(Ui.Typography).attrs({
  variant: 'subtitle1',
})``

export const Content = styled(Lib.MarkdownDisplay).attrs({
  mt: 2,
})``

export const Date = styled(Ui.Typography).attrs({
  mt: 6,
  variant: 'footnote',
  color: 'divider.500',
  textAlign: 'right',
})``

export const DeleteButton = styled(Ui.IconButton).attrs({
  position: 'absolute',
  width: 30,
  height: 30,
  top: -7,
  right: -7,
  borderRadius: 'full',
  colorScheme: 'error',
})``
