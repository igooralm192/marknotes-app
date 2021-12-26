import { CheckIcon, KeyboardAvoidingView } from 'native-base'
import styled from 'styled-components/native'

import * as UI from '@/components/ui'

export const Container = styled(KeyboardAvoidingView).attrs({
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})``

const AddNoteInput = styled(UI.Input).attrs({
  px: 0,
  py: 0,
  borderWidth: 0,
})``

export const TitleInput = styled(AddNoteInput).attrs({
  fontSize: '3xl',
  fontWeight: 'bold',
})``

export const ContentInput = styled(AddNoteInput).attrs({
  mt: 4,
  flex: 1,
  fontSize: 'lg',
  fontWeight: 500,
})``

export const SaveButton = styled(UI.FAB).attrs({
  colorScheme: 'success',
})``

export const SaveIcon = styled(CheckIcon).attrs({
  size: 'sm',
})``
