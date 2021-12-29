import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useRef } from 'react'
import { TextInput } from 'react-native'

import { useNotes } from '@/contexts'
import { Toast } from '@/helpers'
import { useNavigation } from '@/routes'
import { RouteStackParamList } from '@/routes/types'
import { formatDate } from '@/utils'

import {
  Container,
  TitleInput,
  DateText,
  ContentInput,
  SaveButton,
  DeleteButton,
} from './styles'

export interface EditNoteScreenProps
  extends NativeStackScreenProps<RouteStackParamList, 'EditNoteScreen'> {}

const EditNoteScreen: React.FC<EditNoteScreenProps> = ({ route }) => {
  const { noteId } = route.params

  const navigation = useNavigation()

  const { notesById, editNote, deleteNote } = useNotes()
  const note = notesById[noteId]

  const [title, setTitle] = useState(note?.title ?? '')
  const [content, setContent] = useState(note?.content ?? '')

  const titleInputRef = useRef() as React.MutableRefObject<TextInput>
  const contentInputRef = useRef() as React.MutableRefObject<TextInput>

  const handleSaveNote = () => {
    try {
      editNote(noteId, title, content)

      Toast.success('Nota atualizada com sucesso!')

      titleInputRef?.current?.blur()
      contentInputRef?.current?.blur()
    } catch (err: any) {
      const errorMessage =
        err?.message || 'Algo de errado aconteceu, tente novamente.'

      Toast.error(errorMessage)
    }
  }

  const handleDeleteNote = () => {
    deleteNote(noteId)

    Toast.error('Nota removida com sucesso!')

    navigation.goBack()
  }

  const handleEditing = (isEditing: boolean) => {
    if (isEditing) {
      contentInputRef?.current?.focus()
    }
  }

  return (
    <Container keyboardVerticalOffset={-200} behavior="padding">
      <TitleInput
        ref={titleInputRef}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={() => contentInputRef?.current?.focus()}
        testID="edit-note-title-input"
      />

      <DateText>{formatDate(note?.date)}</DateText>

      <ContentInput
        placeholder="Digite alguma coisa..."
        value={content}
        onChangeText={setContent}
        onEditing={handleEditing}
        onRef={ref => (contentInputRef.current = ref)}
        testID="edit-note-content"
      />

      <DeleteButton
        icon="trash"
        onPress={handleDeleteNote}
        testID="edit-note-delete-button"
      />

      <SaveButton
        icon="save"
        onPress={handleSaveNote}
        testID="edit-note-save-button"
      />
    </Container>
  )
}

export default EditNoteScreen
