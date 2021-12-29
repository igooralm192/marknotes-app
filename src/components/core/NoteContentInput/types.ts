import { InputProps } from '@/components/ui'

export interface NoteContentInputRef {
  focus: () => void
  blur: () => void
  isFocused: () => boolean
}
export interface NoteContentInputProps extends InputProps {
  onEditing?: (isEditing: boolean) => void
}
