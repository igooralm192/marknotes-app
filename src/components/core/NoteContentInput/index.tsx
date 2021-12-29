import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'

import { InputProps } from '@/components/ui'
import { Container, MarkdownContainer, Markdown, Input } from './styles'

export interface NoteContentInputProps extends InputProps {
  onRef: (ref: TextInput) => void
  onEditing: (isEditing: boolean) => void
}

const NoteContentInput: React.FC<NoteContentInputProps> = ({
  onRef,
  onEditing,
  testID,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const showMarkdown = () => setIsEditing(false)
  const hideMarkdown = () => setIsEditing(true)

  useEffect(() => {
    onEditing(isEditing)
  }, [isEditing])

  return (
    <Container onPress={hideMarkdown}>
      <MarkdownContainer
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        isEditing={isEditing}
        testID={`${testID}-markdown-container`}>
        <Markdown
          text={props.value ?? ''}
          onPress={hideMarkdown}
          testID={`${testID}-markdown`}
        />
      </MarkdownContainer>

      <Input
        ref={onRef}
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

export default NoteContentInput
