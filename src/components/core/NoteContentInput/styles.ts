import { IScrollViewProps, Pressable, ScrollView } from 'native-base'
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

export const Container = styled(Pressable).attrs({
  mt: 4,
  flex: 1,
})``

export const MarkdownContainer = styled<ScrollView>(ScrollView).attrs(
  ({ isEditing }) => {
    return {
      display: !isEditing ? 'flex' : 'none',
    }
  },
)``

export const Markdown = styled(Lib.MarkdownDisplay)``

export const Input = styled<Input>(Ui.Input).attrs(
  ({ isEditing, ...props }) => {
    return {
      px: 0,
      py: 0,
      borderWidth: 0,
      fontSize: 'lg',
      fontWeight: 500,
      display: isEditing ? 'flex' : 'none',
      ...props,
    }
  },
)``
