import { StackActions } from '@react-navigation/native'
import React, { useState } from 'react'

import { useNotes } from '@/contexts'
import { Toast } from '@/helpers'
import { useNavigation } from '@/routes'
import { Container, TitleInput, ContentInput, SaveButton } from './styles'

export interface AddNoteScreenProps {}

const AddNoteScreen: React.FC<AddNoteScreenProps> = () => {
  const navigation = useNavigation()

  const { addNote } = useNotes()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddNote = () => {
    try {
      const noteId = addNote(title, content)

      Toast.success('Nota adicionada com sucesso!')

      navigation.dispatch(StackActions.replace('EditNoteScreen', { noteId }))
    } catch (err: any) {
      const errorMessage =
        err?.message || 'Algo de errado aconteceu, tente novamente.'

      Toast.error(errorMessage)
    }
  }

  return (
    <Container keyboardVerticalOffset={-200} behavior="padding">
      <TitleInput
        placeholder="Título"
        onChangeText={setTitle}
        testID="add-note-title-input"
      />

      <ContentInput
        placeholder="Digite alguma coisa..."
        textAlignVertical="top"
        onChangeText={setContent}
        testID="add-note-content-input"
        multiline
      />

      <SaveButton
        icon="save"
        onPress={handleAddNote}
        testID="add-note-save-button"
      />
    </Container>
  )
}

export default AddNoteScreen
