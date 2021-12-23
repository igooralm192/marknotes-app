import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

import { Note } from '@/types'
import { AppState } from '.'

const notesAdapter = createEntityAdapter<Note>()

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

export const { noteAdded, noteRemoved, cleanNotes } = notesSlice.actions

export default notesSlice.reducer
