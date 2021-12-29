import React, { useState, useEffect, useRef, useImperativeHandle } from 'react'
import { TextInput } from 'react-native'

import { Container, MarkdownContainer, Markdown, Input } from './styles'
import { NoteContentInputRef, NoteContentInputProps } from './types'

const NoteContentInput: React.ForwardRefRenderFunction<
  NoteContentInputRef,
  NoteContentInputProps
> = ({ onEditing, testID, ...props }, ref) => {
  const inputRef = useRef() as React.MutableRefObject<TextInput>
  const [isEditing, setIsEditing] = useState(false)

  const showMarkdown = () => setIsEditing(false)
  const hideMarkdown = () => setIsEditing(true)

  const focusInput = () => {
    hideMarkdown()
    inputRef?.current?.focus()
  }

  const blurInput = () => {
    showMarkdown()
    inputRef?.current?.blur()
  }

  useEffect(() => {
    onEditing?.(isEditing)
  }, [isEditing])

  useImperativeHandle(ref, () => ({
    focus: focusInput,
    blur: blurInput,
    isFocused: () => inputRef?.current?.isFocused(),
  }))

  return (
    <Container onPress={focusInput} testID={`${testID}-container`}>
      <MarkdownContainer
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        isEditing={isEditing}
        testID={`${testID}-markdown-container`}>
        <Markdown
          text={props.value ?? ''}
          onPress={focusInput}
          testID={`${testID}-markdown`}
        />
      </MarkdownContainer>

      <Input
        ref={inputRef}
        textAlignVertical="top"
        onFocus={hideMarkdown}
        onBlur={showMarkdown}
        isEditing={isEditing}
        testID={`${testID}-input`}
        multiline
        {...props}
      />
    </Container>
  )
}

export default React.forwardRef(NoteContentInput)
