import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import { mockNote, ThemeProvider } from '@/utils'
import NotesList from '.'

const notes = [mockNote()]
const onPressNoteMock = jest.fn()
const onDeleteNoteMock = jest.fn()

jest.mock('../NotesListItem', () => 'Any component')

describe('NotesList', () => {
  it('should renders correctly', async () => {
    const screen = render(
      <NotesList
        notes={notes}
        onPressNote={onPressNoteMock}
        onDeleteNote={onDeleteNoteMock}
      />,
      {
        wrapper: ThemeProvider,
      },
    )

    const notesList = await screen.findByTestId('notes-list')

    expect(notesList.props.data).toHaveLength(notes.length)
    expect(notesList.findByProps({ ...notes[0] })).toBeTruthy()
  })

  it('should call onPress on press list item', async () => {
    const screen = render(
      <NotesList
        notes={notes}
        onPressNote={onPressNoteMock}
        onDeleteNote={onDeleteNoteMock}
      />,
      {
        wrapper: ThemeProvider,
      },
    )

    const notesList = await screen.findByTestId('notes-list')
    const notesListItem = notesList.findByProps({ ...notes[0] })

    fireEvent.press(notesListItem)
    expect(onPressNoteMock).toHaveBeenCalledWith(notes[0].id)
  })

  it('should call onDelete on list item delete event', async () => {
    const screen = render(
      <NotesList
        notes={notes}
        onPressNote={onPressNoteMock}
        onDeleteNote={onDeleteNoteMock}
      />,
      {
        wrapper: ThemeProvider,
      },
    )

    const notesList = await screen.findByTestId('notes-list')
    const notesListItem = notesList.findByProps({ ...notes[0] })

    // Simulating onDeleteNote event
    act(() => {
      notesListItem.props.onDeleteNote(notes[0].id)
    })
    expect(onDeleteNoteMock).toHaveBeenCalledWith(notes[0].id)
  })
})
