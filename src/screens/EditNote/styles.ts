import {
  IScrollViewProps,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from 'native-base'
import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

import * as Ui from '@/components/ui'
import * as Lib from '@/components/lib'

type IsEditingProps = {
  isEditing?: boolean
}

type Input = React.ForwardRefExoticComponent<
  Ui.InputProps & React.RefAttributes<TextInput> & IsEditingProps
>

type ScrollView = React.ForwardRefExoticComponent<
  IScrollViewProps & React.RefAttributes<unknown> & IsEditingProps
>

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

export const ContentContainer = styled(Pressable).attrs({
  mt: 4,
  flex: 1,
})``

export const MarkdownContentContainer = styled<ScrollView>(ScrollView).attrs(
  ({ isEditing }) => {
    return {
      display: !isEditing ? 'flex' : 'none',
    }
  },
)``

export const MarkdownContent = styled(Lib.MarkdownDisplay)``

export const ContentInput = styled<Input>(EditNoteInput).attrs(
  ({ isEditing }) => {
    return {
      fontSize: 'lg',
      fontWeight: 500,
      display: isEditing ? 'flex' : 'none',
    }
  },
)``

export const SaveButton = styled(Ui.FAB).attrs({
  colorScheme: 'success',
})``

export const DeleteButton = styled(Ui.FAB).attrs({
  bottom: 32,
  colorScheme: 'error',
})``
