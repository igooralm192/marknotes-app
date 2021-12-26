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
    noteChanged: notesAdapter.setOne,
    noteRemoved: notesAdapter.removeOne,
    cleanNotes: notesAdapter.removeAll,
  },
})

export const { selectAll: selectAllNotes, selectById: selectNoteById } =
  notesAdapter.getSelectors<AppState>(state => state.notes)

const noteTitleIncludesText = (text: string) => (note: Note) =>
  note.title.toLowerCase().includes(text.toLowerCase().trim())

export const selectAllNotesByTitle = (text: string) => (state: AppState) =>
  selectAllNotes(state).filter(noteTitleIncludesText(text))

export const { noteAdded, noteChanged, noteRemoved, cleanNotes } =
  notesSlice.actions

export default notesSlice.reducer
