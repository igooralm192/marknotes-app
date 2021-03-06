import { Box } from 'native-base'
import styled from 'styled-components/native'

import * as Ui from '@/components/ui'
import * as Core from '@/components/core'

export const Container = styled(Box).attrs({
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})``

export const Title = styled(Ui.Typography).attrs({
  variant: 'h1',
})``

export const SearchInput = styled(Ui.Input).attrs({
  mt: 8,
  p: 3,
  borderWidth: 0,
  borderRadius: 8,
  bg: 'card.500:alpha.50',
})``

export const SearchIcon = styled(Ui.Icon).attrs({
  name: 'search',
  color: 'grey.500',
  ml: 4,
})``

export const NotesList = styled(Core.NotesList)``

export const AddButton = styled(Ui.FAB)``
