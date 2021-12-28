import { Note } from '@/types'
import { Dictionary } from '@reduxjs/toolkit'

export interface NotesContextData {
  notes: Note[]
  notesById: Dictionary<Note>
  addNote: (title: string, content: string) => string
  editNote: (id: string, title: string, content: string) => void
  deleteNote: (id: string) => void
}
