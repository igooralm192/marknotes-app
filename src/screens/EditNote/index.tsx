import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useToast } from 'native-base'
import React, { useState, useEffect, useRef } from 'react'
import { TextInput } from 'react-native'

import { useNavigation } from '@/routes'
import { RouteStackParamList } from '@/routes/types'
import { useDispatch, useSelector } from '@/store'
import { noteChanged, noteRemoved, selectNoteById } from '@/store/notes'
import { formatDate } from '@/utils'

import {
  Container,
  TitleInput,
  DateText,
  ContentContainer,
  MarkdownContentContainer,
  MarkdownContent,
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

  const titleInputRef = useRef() as React.MutableRefObject<TextInput>
  const contentInputRef = useRef() as React.MutableRefObject<TextInput>

  const [isEditing, setIsEditing] = useState(false)

  const showMarkdown = () => setIsEditing(false)
  const hideMarkdown = () => setIsEditing(true)

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

    titleInputRef?.current?.blur()
    contentInputRef?.current?.blur()
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

  useEffect(() => {
    if (isEditing) {
      contentInputRef?.current?.focus()
    }
  }, [isEditing])

  if (!note) {
    return null
  }

  return (
    <Container keyboardVerticalOffset={-200} behavior="padding">
      <TitleInput
        ref={titleInputRef}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={hideMarkdown}
        testID="edit-note-title-input"
      />

      <DateText>{formatDate(note.date)}</DateText>

      <ContentContainer onPress={hideMarkdown}>
        <MarkdownContentContainer
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}
          isEditing={isEditing}
          testID="edit-note-markdown-content-container">
          <MarkdownContent
            text={content}
            onPress={hideMarkdown}
            testID="edit-note-markdown-content"
          />
        </MarkdownContentContainer>

        <ContentInput
          ref={contentInputRef}
          placeholder="Digite alguma coisa..."
          textAlignVertical="top"
          value={content}
          onChangeText={setContent}
          onBlur={showMarkdown}
          isEditing={isEditing}
          testID="edit-note-content-input"
          multiline
        />
      </ContentContainer>

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
