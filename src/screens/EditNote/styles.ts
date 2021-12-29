import { KeyboardAvoidingView } from 'native-base'
import styled from 'styled-components/native'

import * as Ui from '@/components/ui'
import * as Core from '@/components/core'

export const Container = styled(KeyboardAvoidingView).attrs({
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})``

const EditNoteInput = styled(Ui.Input).attrs({
  px: 0,
  py: 0,
  borderWidth: 0,
})``

export const TitleInput = styled(EditNoteInput).attrs({
  fontSize: '3xl',
  fontWeight: 'bold',
})``

export const DateText = styled(Ui.Typography).attrs({
  variant: 'label',
  color: 'grey.500',
})``

export const ContentInput = styled(Core.NoteContentInput)``

export const SaveButton = styled(Ui.FAB).attrs({
  colorScheme: 'success',
})``

export const DeleteButton = styled(Ui.FAB).attrs({
  bottom: 32,
  colorScheme: 'error',
})``
