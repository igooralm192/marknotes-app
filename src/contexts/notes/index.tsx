import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from '@/stores'
import { noteAdded, noteRemoved, selectAllNotes } from '@/stores/notes'

import { NotesContextData } from './types'

const NotesContext = React.createContext<NotesContextData>(
  {} as NotesContextData,
)

const NotesProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()
  const notes = useSelector(selectAllNotes)

  const addNote = (title: string, content: string) => {
    const formattedTitle = title.trim()

    if (formattedTitle.length === 0) {
      throw {
        message: 'Sua nota precisa de um título!',
      }
    }

    const id = uuidv4()

    dispatch(
      noteAdded({
        id,
        title: formattedTitle,
        content,
        date: new Date().toISOString(),
      }),
    )

    return id
  }

  const deleteNote = (noteId: string) => {
    dispatch(noteRemoved(noteId))
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
      }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => React.useContext(NotesContext)

export default NotesProvider
