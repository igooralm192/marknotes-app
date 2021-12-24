import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useToast } from 'native-base'
import React, { useState } from 'react'

import { useNavigation } from '@/routes'
import { RouteStackParamList } from '@/routes/types'
import { useDispatch, useSelector } from '@/store'
import { noteChanged, noteRemoved, selectNoteById } from '@/store/notes'
import { formatDate } from '@/utils'

import {
  Container,
  TitleInput,
  DateText,
  ContentInput,
  SaveButton,
  SaveIcon,
  DeleteButton,
  DeleteIcon,
} from './styles'

export interface EditNoteScreenProps
  extends NativeStackScreenProps<RouteStackParamList, 'EditNoteScreen'> {}

const EditNoteScreen: React.FC<EditNoteScreenProps> = ({ route }) => {
  const { noteId } = route.params

  const toast = useToast()
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const note = useSelector(state => selectNoteById(state, noteId))

  const [title, setTitle] = useState(note?.title ?? '')
  const [content, setContent] = useState(note?.content ?? '')

  const handleSaveNote = () => {
    if (!note) {
      return
    }

    if (title.trim().length === 0) {
      toast.show({
        title: 'Sua nota precisa de um título!',
        placement: 'bottom',
        status: 'error',
      })

      return
    }

    dispatch(
      noteChanged({
        ...note,
        title,
        content,
      }),
    )

    toast.show({
      title: 'Nota atualizada com sucesso!',
      placement: 'bottom',
      status: 'success',
    })
  }

  const handleDeleteNote = () => {
    if (!note) {
      return
    }

    dispatch(noteRemoved(noteId))

    toast.show({
      title: 'Nota removida com sucesso!',
      placement: 'bottom',
      status: 'success',
    })

    navigation.goBack()
  }

  if (!note) {
    return null
  }

  return (
    <Container keyboardVerticalOffset={-200} behavior="padding">
      <TitleInput
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        testID="edit-note-title-input"
      />

      <DateText>{formatDate(note.date)}</DateText>

      <ContentInput
        placeholder="Digite alguma coisa..."
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
        testID="edit-note-content-input"
        multiline
      />

      <DeleteButton
        icon={<DeleteIcon />}
        onPress={handleDeleteNote}
        testID="edit-note-delete-button"
      />

      <SaveButton
        icon={<SaveIcon />}
        onPress={handleSaveNote}
        testID="edit-note-save-button"
      />
    </Container>
  )
}

export default EditNoteScreen
