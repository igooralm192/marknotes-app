import { useNavigation } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native'
import React from 'react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from '@/utils'
import HomeScreen from '.'

describe('HomeScreen', () => {
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
})
