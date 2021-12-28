import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from '@/stores'
import {
  noteAdded,
  noteChanged,
  noteRemoved,
  selectAllNotes,
} from '@/stores/notes'

import { NotesContextData } from './types'

const NotesContext = React.createContext<NotesContextData>(
  {} as NotesContextData,
)

const NotesProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch()

  const notes = useSelector(selectAllNotes)
  const notesById = useSelector(state => state.notes.entities)

  const verifyTitle = (title: string): string => {
    const formattedTitle = title.trim()

    if (formattedTitle.length === 0) {
      throw {
        message: 'Sua nota precisa de um título!',
      }
    }

    return formattedTitle
  }

  const addNote = (title: string, content: string) => {
    const formattedTitle = verifyTitle(title)

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

  const editNote = (id: string, title: string, content: string) => {
    const formattedTitle = verifyTitle(title)

    dispatch(
      noteChanged({
        id,
        changes: {
          title: formattedTitle,
          content,
        },
      }),
    )
  }

  const deleteNote = (id: string) => {
    dispatch(noteRemoved(id))
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        notesById,
        addNote,
        editNote,
        deleteNote,
      }}>
      {children}
    </NotesContext.Provider>
  )
}

export const useNotes = () => React.useContext(NotesContext)

export default NotesProvider
