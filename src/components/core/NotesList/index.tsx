import React from 'react'
import { ListRenderItem } from 'react-native'

import { Note } from '@/types'
import NotesListItem from '../NotesListItem'
import { Container } from './styles'

export interface NotesListProps {
  notes: Note[]
  onPressNote: (noteId: string) => void
  onDeleteNote: (noteId: string) => void
}

const NotesList: React.FC<NotesListProps> = ({
  notes,
  onPressNote,
  onDeleteNote,
}) => {
  const getKeyExtractor = (item: Note) => item.id

  const renderListItem: ListRenderItem<Note> = ({ item }) => {
    return (
      <NotesListItem
        {...item}
        onPress={() => onPressNote(item.id)}
        onDeleteNote={onDeleteNote}
      />
    )
  }

  return (
    <Container
      data={notes}
      keyExtractor={getKeyExtractor}
      renderItem={renderListItem}
      testID="notes-list"
    />
  )
}

export default NotesList
