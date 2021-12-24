import { IPressableProps } from 'native-base'
import React, { memo } from 'react'

import { Note } from '@/types'

import {
  Container,
  Card,
  Title,
  Content,
  DeleteButton,
  DeleteIcon,
} from './styles'

export interface NotesListItemProps extends IPressableProps, Note {
  onDeleteNote: (noteId: string) => void
}

const NotesListItem: React.FC<NotesListItemProps> = ({
  id,
  title,
  content,
  onDeleteNote,
  ...props
}) => {
  return (
    <Container {...props}>
      <Card>
        <Title>{title}</Title>

        <Content>{content}</Content>

        <DeleteButton
          icon={<DeleteIcon />}
          onPress={() => onDeleteNote(id)}
          testID={`note-${id}-delete-button`}
        />
      </Card>
    </Container>
  )
}

export default memo(NotesListItem)
