import { CloseIcon, KeyboardAvoidingView } from 'native-base'

import * as UI from '@/components/ui'
import { styled } from '@/utils'

export const Container = styled(KeyboardAvoidingView, {
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})

const EditNoteInput = styled(UI.Input, {
  px: 0,
  py: 0,
  borderWidth: 0,
})

export const TitleInput = styled(EditNoteInput, {
  fontSize: '3xl',
  fontWeight: 'bold',
})

export const DateText = styled(UI.Typography)

export const ContentInput = styled(EditNoteInput, {
  mt: 4,
  flex: 1,
  fontSize: 'lg',
  fontWeight: 500,
})

export const DeleteButton = styled(UI.FAB, {
  colorScheme: 'error',
})
export const DeleteIcon = styled(CloseIcon, {
  size: 'sm',
})
