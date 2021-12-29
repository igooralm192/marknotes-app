import { fireEvent, render } from '@testing-library/react-native'
import { mocked } from 'jest-mock'
import React from 'react'

import { formatDate, mockNote, ThemeProvider } from '@/utils'
import NotesListItem from '.'

const note = mockNote()
const onDeleteNoteMock = jest.fn()

jest.mock('@/utils', () => {
  const utilsActual = jest.requireActual('@/utils')

  return {
    ...utilsActual,
    formatDate: jest.fn(s => s),
  }
})

describe('NotesListItem', () => {
  it('should renders correctly', () => {
    const formatDateMocked = mocked(formatDate)

    formatDateMocked.mockImplementationOnce(s => s ?? '')

    const screen = render(
      <NotesListItem {...note} onDeleteNote={onDeleteNoteMock} />,
      {
        wrapper: ThemeProvider,
      },
    )

    expect(screen.getByText(note.title)).toBeTruthy()
    expect(screen.getByText(note.content)).toBeTruthy()
    expect(formatDateMocked).toHaveBeenCalledWith(note.date)
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
