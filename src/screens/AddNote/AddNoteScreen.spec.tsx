import { useNavigation } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native'
import { mocked } from 'jest-mock'

import store from '@/stores'
import { cleanNotes, selectAllNotes } from '@/stores/notes'
import { mockNote, renderWithProviders } from '@/utils'
import AddNoteScreen from '.'

const note = mockNote()

describe('AddNoteScreen', () => {
  const dispatchMock = jest.fn()

  beforeAll(() => {
    store.dispatch(cleanNotes())

    mocked(useNavigation).mockImplementation(() => ({
      dispatch: dispatchMock,
    }))
  })

  it('should add a new note, show message and back to previous screen', async () => {
    const screen = renderWithProviders(AddNoteScreen)

    const titleInput = await screen.findByTestId('add-note-title-input')
    const contentInput = await screen.findByTestId('add-note-content-input')

    fireEvent.changeText(titleInput, note.title)
    fireEvent.changeText(contentInput, note.content)

    jest.useFakeTimers()

    fireEvent.press(screen.getByTestId('add-note-save-button'))

    expect(selectAllNotes(store.getState())).toHaveLength(1)
    expect(screen.queryByText('Nota adicionada com sucesso!')).toBeTruthy()
    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: expect.objectContaining({
          name: 'EditNoteScreen',
          params: { noteId: expect.any(String) },
        }),
      }),
    )
  })

  it('should show error message when try add note without title', async () => {
    const screen = renderWithProviders(AddNoteScreen)

    jest.useFakeTimers()

    fireEvent.press(screen.getByTestId('add-note-save-button'))

    expect(screen.queryByText('Sua nota precisa de um título!')).toBeTruthy()
  })
})
