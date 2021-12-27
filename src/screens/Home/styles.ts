import { Box, FlatList, SearchIcon as NBSearchIcon } from 'native-base'
import React from 'react'
import { FlatListProps } from 'react-native'
import styled from 'styled-components/native'

import * as UI from '@/components/ui'
import { Note } from '@/types'

export const Container = styled(Box).attrs({
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})``

export const Title = styled(UI.Typography).attrs({
  variant: 'h1',
})``

export const SearchIcon = styled(NBSearchIcon).attrs({
  ml: 4,
  size: 4,
  color: 'white.500:alpha.50',
})``

export const SearchInput = styled(UI.Input).attrs({
  mt: 8,
  p: 3,
  borderWidth: 0,
  borderRadius: 8,
  bg: 'card.500:alpha.50',
})``

export const NotesList = styled<React.FC<FlatListProps<Note>>>(FlatList).attrs({
  mt: 4,
  mx: -6,
  contentContainerStyle: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
})``

export const AddButton = styled(UI.FAB)``
