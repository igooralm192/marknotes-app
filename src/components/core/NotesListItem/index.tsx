import { IPressableProps } from 'native-base'
import React, { memo } from 'react'

import { Note } from '@/types'
import { formatDate } from '@/utils'

import { Container, Card, Title, Content, Date, DeleteButton } from './styles'

export interface NotesListItemProps extends IPressableProps, Note {
  onDeleteNote: (noteId: string) => void
}

const NotesListItem: React.FC<NotesListItemProps> = ({
  id,
  title,
  content,
  date,
  onDeleteNote,
  ...props
}) => {
  return (
    <Container {...props}>
      <Card>
        <Title>{title}</Title>
        <Content text={content} onPress={props.onPress} />
        <Date>{formatDate(date)}</Date>

        <DeleteButton
          icon="close"
          onPress={() => onDeleteNote(id)}
          testID={`note-${id}-delete-button`}
        />
      </Card>
    </Container>
  )
}

export default memo(NotesListItem)
