import { CheckIcon, KeyboardAvoidingView } from 'native-base'

import * as UI from '@/components/ui'
import { styled } from '@/utils'

export const Container = styled(KeyboardAvoidingView, {
  px: 6,
  pt: 6,
  flex: 1,
  overflow: 'visible',
  bg: 'background.500',
})

const AddNoteInput = styled(UI.Input, {
  px: 0,
  py: 0,
  borderWidth: 0,
})

export const TitleInput = styled(AddNoteInput, {
  fontSize: '3xl',
  fontWeight: 'bold',
})
export const ContentInput = styled(AddNoteInput, {
  mt: 4,
  flex: 1,
  fontSize: 'lg',
  fontWeight: 500,
})

export const SaveButton = styled(UI.FAB, {
  colorScheme: 'success',
})
export const SaveIcon = styled(CheckIcon, {
  size: 'sm',
})
