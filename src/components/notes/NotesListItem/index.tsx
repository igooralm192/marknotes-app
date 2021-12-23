import React, { memo } from 'react'

import { Note } from '@/types'

import { Container, Title, Content, DeleteButton, DeleteIcon } from './styles'

export interface NotesListItemProps extends Note {
  onDeleteNote: (noteId: string) => void
}

const NotesListItem: React.FC<NotesListItemProps> = ({
  id,
  title,
  content,
  onDeleteNote,
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Content>{content}</Content>

      <DeleteButton
        onPress={() => onDeleteNote(id)}
        icon={<DeleteIcon />}
        testID="delete-note-button"
      />
    </Container>
  )
}

export default memo(NotesListItem)
