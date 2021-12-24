import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import { Note } from '@/types'
import { AppState } from '.'

const notesAdapter = createEntityAdapter<Note>({
  sortComparer: (a, b) => b.date.valueOf() - a.date.valueOf(),
})

const notesSlice = createSlice({
  name: 'notes',
  initialState: notesAdapter.getInitialState(),
  reducers: {
    noteAdded: notesAdapter.addOne,
    noteRemoved: notesAdapter.removeOne,
    cleanNotes: notesAdapter.removeAll,
  },
})

export const { selectAll: selectAllNotes } =
  notesAdapter.getSelectors<AppState>(state => state.notes)

const noteTitleIncludesText = (text: string) => (note: Note) =>
  note.title.toLowerCase().includes(text.toLowerCase().trim())

export const selectAllNotesByTitle = (text: string) => (state: AppState) =>
  selectAllNotes(state).filter(noteTitleIncludesText(text))

export const { noteAdded, noteRemoved, cleanNotes } = notesSlice.actions

export default notesSlice.reducer
