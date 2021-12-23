import {
  Box,
  FlatList,
  SearchIcon as NBSearchIcon,
  AddIcon as NBAddIcon,
} from 'native-base'
import { FlatListProps } from 'react-native'

import * as UI from '@/components/ui'
import { styled } from '@/utils'
import { Note } from '@/types'

export const Container = styled(Box, {
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})

export const Title = styled(UI.Typography, {
  variant: 'header',
})

export const SearchIcon = styled(NBSearchIcon, {
  ml: 4,
  size: 4,
  color: 'white.500:alpha.50',
})

export const SearchInput = styled(UI.Input, {
  mt: 8,
  p: 3,
  borderWidth: 0,
  borderRadius: 8,
  bg: 'card.500:alpha.50',
})

export const NotesList = styled<FlatListProps<Note>>(FlatList, {
  style: {
    marginTop: 16,
    marginHorizontal: -24,
  },
  contentContainerStyle: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
})

export const AddButton = styled(UI.FAB)

export const AddIcon = styled(NBAddIcon, {
  size: 'sm',
})
