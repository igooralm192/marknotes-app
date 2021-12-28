import { FlatList } from 'native-base'
import { FlatListProps } from 'react-native'
import styled from 'styled-components/native'

import { Note } from '@/types'

export const Container = styled<React.FC<FlatListProps<Note>>>(FlatList).attrs({
  mt: 4,
  mx: -6,
  contentContainerStyle: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
})``
