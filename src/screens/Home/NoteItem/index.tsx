import React from 'react'

import { INoteItem } from '../types'

import { Container, Title, Content, DeleteButton, DeleteIcon } from './styles'

export interface NoteItemProps extends INoteItem {}

const NoteItem: React.FC<NoteItemProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Content>{content}</Content>

      <DeleteButton icon={<DeleteIcon />} />
    </Container>
  )
}

export default NoteItem
