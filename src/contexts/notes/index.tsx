import React from 'react'

import { useDispatch, useSelector } from '@/stores'
import { noteRemoved, selectAllNotes } from '@/stores/notes'

import { NotesContextData } from './types'

const NotesContext = React.createContext<NotesContextData>(
  {} as NotesContextData,
)

const NotesProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()
  const notes = useSelector(selectAllNotes)

  const deleteNote = (noteId: string) => {
    dispatch(noteRemoved(noteId))
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        deleteNote,
      }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => React.useContext(NotesContext)

export default NotesProvider
