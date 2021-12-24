import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import { Note } from '@/types'
import { ThemeProvider } from '@/utils'
import NotesListItem from '.'

const note: Note = {
  id: 'any_id',
  title: 'any_title',
  content: 'any_content',
  date: new Date(),
}

const onDeleteNoteMock = jest.fn()

describe('HomeScreen', () => {
  it('should renders correctly', () => {
    const screen = render(
      <NotesListItem {...note} onDeleteNote={onDeleteNoteMock} />,
      {
        wrapper: ThemeProvider,
      },
    )

    expect(screen.getByText(note.title)).toBeDefined()
    expect(screen.getByText(note.content)).toBeDefined()
  })

  it('should call method on delete icon press', () => {
    const screen = render(
      <NotesListItem {...note} onDeleteNote={onDeleteNoteMock} />,
      {
        wrapper: ThemeProvider,
      },
    )

    fireEvent.press(screen.getByTestId(`note-${note.id}-delete-button`))
    expect(onDeleteNoteMock).toHaveBeenCalledWith(note.id)
  })
})
