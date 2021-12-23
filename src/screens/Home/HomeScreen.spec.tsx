import { useNavigation } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native'
import { mocked } from 'jest-mock'
import React from 'react'

import store from '@/store'
import { cleanNotes, noteAdded } from '@/store/notes'
import { renderWithProviders } from '@/utils'
import HomeScreen from '.'

describe('HomeScreen', () => {
  beforeEach(() => {
    store.dispatch(cleanNotes())

    store.dispatch(
      noteAdded({
        id: 'any_id',
        title: 'any_title',
        content: 'any_content',
        date: new Date(),
      }),
    )
  })

  it('should renders correctly', () => {
    const screen = renderWithProviders(<HomeScreen />)

    expect(screen.getByText('Notas')).toBeDefined()
  })

  it('should render notes list and contains one note', () => {
    const screen = renderWithProviders(<HomeScreen />)

    const notesList = screen.getByTestId('notes-list')
    const notesListItem = screen.queryByTestId(`notes-list-item-${'any_id'}`)

    expect(notesList).toContainElement(notesListItem)
  })

  it('should navigate to CreateNoteScreen when press add button', () => {
    const useNavigationMocked = mocked(useNavigation)
    const navigateMock = jest.fn()

    useNavigationMocked.mockImplementationOnce(() => ({
      navigate: navigateMock,
    }))

    const screen = renderWithProviders(<HomeScreen />)

    const addButton = screen.getByTestId('add-note-button')
    fireEvent.press(addButton)

    expect(navigateMock).toHaveBeenCalledWith('CreateNoteScreen')
  })

  it('should render notes list and remove one note from screen', () => {
    const screen = renderWithProviders(<HomeScreen />)

    const notesList = screen.getByTestId('notes-list')
    expect(notesList).not.toHaveProp('data', [])
    expect(store.getState().notes.ids.length).toBe(1)

    fireEvent.press(screen.getByTestId('note-any_id-delete-button'))
    expect(notesList).toHaveProp('data', [])
    expect(store.getState().notes.ids.length).toBe(0)
  })
})
