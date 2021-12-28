import { Note } from '@/types'

export interface NotesContextData {
  notes: Note[]
  deleteNote: (noteId: string) => void
}
