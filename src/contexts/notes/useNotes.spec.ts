import { renderHook, act } from '@testing-library/react-hooks'

import store from '@/stores'
import { cleanNotes, noteAdded } from '@/stores/notes'
import { mockNote, Providers } from '@/utils'

import { useNotes } from '.'

const notes = [mockNote()]

describe('useNotes', () => {
  beforeEach(() => {
    store.dispatch(cleanNotes())

    notes.forEach(note => store.dispatch(noteAdded(note)))
  })

  it('should return notes from store', () => {
    const { result } = renderHook(useNotes, { wrapper: Providers })

    expect(result.current.notes).toMatchObject(notes)
  })

  it('should add a note on store', () => {
    const { result } = renderHook(useNotes, { wrapper: Providers })

    let { id, title, content } = mockNote()

    act(() => {
      id = result.current.addNote(title, content)
    })

    expect(result.current.notes).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id,
          title,
          content,
        }),
      ]),
    )
  })

  it('should delete a note from store', () => {
    const { result } = renderHook(useNotes, { wrapper: Providers })

    const deletedNote = notes[0]

    act(() => {
      result.current.deleteNote(deletedNote.id)
    })

    expect(result.current.notes).toMatchObject(
      notes.filter(note => note.id !== deletedNote.id),
    )
  })
})
