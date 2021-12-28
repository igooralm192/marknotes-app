import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState, useEffect, useRef } from 'react'
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
  ContentContainer,
  MarkdownContentContainer,
  MarkdownContent,
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

  const [isEditing, setIsEditing] = useState(false)

  const showMarkdown = () => setIsEditing(false)
  const hideMarkdown = () => setIsEditing(true)

  const handleSaveNote = () => {
    try {
      editNote(noteId, title, content)

      Toast.success('Nota atualizada com sucesso!')

      titleInputRef?.current?.blur()
      contentInputRef?.current?.blur()
    } catch (err) {
      Toast.error('Nota removida com sucesso!')
    }
  }

  const handleDeleteNote = () => {
    deleteNote(noteId)

    Toast.error('Nota removida com sucesso!')

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
