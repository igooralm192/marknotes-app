import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useToast } from 'native-base'
import React from 'react'

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

  const handleNoteChange = (key: 'title' | 'content') => (text: string) => {
    if (!note) {
      return
    }

    dispatch(
      noteChanged({
        ...note,
        [key]: text,
      }),
    )
  }

  const handleDeleteNote = () => {
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
        value={note.title}
        onChangeText={handleNoteChange('title')}
        testID="edit-note-title-input"
      />

      <DateText>{formatDate(note.date)}</DateText>

      <ContentInput
        placeholder="Digite alguma coisa..."
        textAlignVertical="top"
        value={note.content}
        onChangeText={handleNoteChange('content')}
        testID="edit-note-content-input"
        multiline
      />

      <DeleteButton
        onPress={handleDeleteNote}
        icon={<DeleteIcon />}
        testID="edit-note-delete-button"
      />
    </Container>
  )
}

export default EditNoteScreen
