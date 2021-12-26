import {
  CheckIcon,
  CloseIcon,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from 'native-base'
import styled from 'styled-components/native'

import * as UI from '@/components/ui'
import * as LIB from '@/components/lib'

export const Container = styled(KeyboardAvoidingView).attrs({
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})``

const EditNoteInput = styled(UI.Input).attrs({
  px: 0,
  py: 0,
  borderWidth: 0,
})``

export const TitleInput = styled(EditNoteInput).attrs({
  fontSize: '3xl',
  fontWeight: 'bold',
})``

export const DateText = styled(UI.Typography).attrs({
  variant: 'label',
  color: 'grey.500',
})``

export const ContentContainer = styled(Pressable).attrs({
  mt: 4,
  flex: 1,
})``

export const MarkdownContentContainer = styled(ScrollView).attrs<{
  isEditing?: boolean
}>(({ isEditing }) => {
  return {
    display: !isEditing ? 'flex' : 'none',
  }
})``

export const MarkdownContent = styled(LIB.Markdown)``

export const ContentInput = styled(EditNoteInput).attrs<{
  isEditing?: boolean
}>(({ isEditing }) => {
  return {
    fontSize: 'lg',
    fontWeight: 500,
    display: isEditing ? 'flex' : 'none',
  }
})``

export const SaveButton = styled(UI.FAB).attrs({
  colorScheme: 'success',
})``

export const SaveIcon = styled(CheckIcon).attrs({
  size: 'sm',
})``

export const DeleteButton = styled(UI.FAB).attrs({
  bottom: 32,
  colorScheme: 'error',
})``

export const DeleteIcon = styled(CloseIcon).attrs({
  size: 'sm',
})``
