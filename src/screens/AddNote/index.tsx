import { StackActions } from '@react-navigation/native'
import { useToast } from 'native-base'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useNavigation } from '@/routes'
import { useDispatch } from '@/store'
import { noteAdded } from '@/store/notes'
import {
  Container,
  TitleInput,
  ContentInput,
  SaveButton,
  SaveIcon,
} from './styles'

export interface AddNoteScreenProps {}

const AddNoteScreen: React.FC<AddNoteScreenProps> = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddNote = () => {
    if (title.trim().length === 0) {
      toast.show({
        title: 'Sua nota precisa de um título!',
        placement: 'bottom',
        status: 'error',
      })

      return
    }

    const id = uuidv4()

    dispatch(
      noteAdded({
        id,
        title,
        content,
        date: new Date().toISOString(),
      }),
    )

    toast.show({
      title: 'Nota adicionada com sucesso!',
      placement: 'bottom',
      status: 'success',
    })

    navigation.dispatch(StackActions.replace('EditNoteScreen', { noteId: id }))
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
        onPress={handleAddNote}
        icon={<SaveIcon />}
        testID="add-note-save-button"
      />
    </Container>
  )
}

export default AddNoteScreen
