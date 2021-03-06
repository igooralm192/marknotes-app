import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import { Note } from '@/types'
import { AppState } from '.'

const notesAdapter = createEntityAdapter<Note>({
  sortComparer: (a, b) =>
    new Date(b.date).valueOf() - new Date(a.date).valueOf(),
})

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState(),
  reducers: {
    noteAdded: notesAdapter.addOne,
    noteChanged: notesAdapter.updateOne,
    noteRemoved: notesAdapter.removeOne,
    cleanNotes: notesAdapter.removeAll,
  },
})

export const { selectAll: selectAllNotes, selectById: selectNoteById } =
  notesAdapter.getSelectors<AppState>(state => state.notes)

export const noteTitleIncludesText = (text: string) => (note: Note) =>
  note.title.toLowerCase().includes(text.toLowerCase().trim())

export const { noteAdded, noteChanged, noteRemoved, cleanNotes } =
  notesSlice.actions

export default notesSlice.reducer
