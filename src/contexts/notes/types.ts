import { Note } from '@/types'

export interface NotesContextData {
  notes: Note[]
  addNote: (title: string, content: string) => string
  deleteNote: (noteId: string) => void
}
