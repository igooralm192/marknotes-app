import React, { memo } from 'react'

import { Note } from '@/types'

import { Container, Title, Content, DeleteButton, DeleteIcon } from './styles'

export interface NotesListItemProps extends Note {}

const NotesListItem: React.FC<NotesListItemProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Content>{content}</Content>

      <DeleteButton icon={<DeleteIcon />} />
    </Container>
  )
}

export default memo(NotesListItem)
