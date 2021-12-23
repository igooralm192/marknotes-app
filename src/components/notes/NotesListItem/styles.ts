import { Box, CloseIcon, IconButton } from 'native-base'

import * as UI from '@/components/ui'
import { styled } from '@/utils'

export const Container = styled(Box, {
  position: 'relative',
  my: 4,
  p: 4,
  width: '100%',
  borderRadius: 16,
  bg: 'card.500',
})

export const Title = styled(UI.Typography, {
  variant: 'subtitle',
})

export const Content = styled(UI.Typography, {
  mt: 2,
})

export const DeleteButton = styled(IconButton, {
  position: 'absolute',
  width: 30,
  height: 30,
  top: -7,
  right: -7,
  p: 2.5,
  borderRadius: 'full',
  bg: 'primary.500',
})

export const DeleteIcon = styled(CloseIcon, { size: '100%' })