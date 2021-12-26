import { useNavigation } from '@react-navigation/native'
import { act, fireEvent } from '@testing-library/react-native'
import faker from 'faker'
import { mocked } from 'jest-mock'

import store from '@/store'
import { cleanNotes, noteAdded, selectAllNotes } from '@/store/notes'
import { formatDate, mockNote, renderWithProviders } from '@/utils'
import EditNoteScreen from '.'

const note = mockNote()

describe('EditNoteScreen', () => {
  const goBackMock = jest.fn()

  beforeAll(() => {
    mocked(useNavigation).mockImplementation(() => ({
      goBack: goBackMock,
    }))
  })

  beforeEach(() => {
    store.dispatch(cleanNotes())
    store.dispatch(noteAdded(note))
  })

  it('should show note values from store', async () => {
    const screen = renderWithProviders(EditNoteScreen, {
      noteId: note.id,
    })

    const titleInput = await screen.findByTestId('edit-note-title-input')
    const dateText = await screen.findByText(formatDate(note.date))
    const contentInput = await screen.findByTestId('edit-note-content-input')

    expect(titleInput.props.value).toBe(note.title)
    expect(dateText).toBeTruthy()
    expect(contentInput.props.value).toBe(note.content)
    // Markdown text
    expect(screen.queryByText(note.content)).toBeTruthy()
  })

  it('should edit a note with new values and show message', async () => {
    const screen = renderWithProviders(EditNoteScreen, {
      noteId: note.id,
    })

    const titleInput = await screen.findByTestId('edit-note-title-input')
    const contentInput = await screen.findByTestId('edit-note-content-input')
    const markdownContentContainer = await screen.findByTestId(
      'edit-note-markdown-content-container',
    )
    const markdownContent = await screen.findByTestId(
      'edit-note-markdown-content',
    )

    expect(contentInput).toHaveStyle({ display: 'none' })
    expect(markdownContentContainer).toHaveStyle({ display: 'flex' })

    fireEvent.press(markdownContent)

    expect(contentInput).toHaveStyle({ display: 'flex' })
    expect(markdownContentContainer).toHaveStyle({ display: 'none' })

    const otherTitle = faker.random.words()
    const otherContent = faker.random.words()

    fireEvent.changeText(titleInput, otherTitle)
    fireEvent.changeText(contentInput, otherContent)

    jest.useFakeTimers()

    act(() => {
      fireEvent.press(screen.getByTestId('edit-note-save-button'))
      // Simulate onBlur event on inputs
      fireEvent(titleInput, 'blur')
      fireEvent(contentInput, 'blur')
    })

    expect(store.getState().notes.entities[note.id]).toMatchObject({
      title: otherTitle,
      content: otherContent,
    })
    expect(screen.queryByText('Nota atualizada com sucesso!')).toBeTruthy()

    expect(contentInput).toHaveStyle({ display: 'none' })
    expect(markdownContentContainer).toHaveStyle({ display: 'flex' })
  })

  it('should remove note, show message and back to previous screen', async () => {
    const screen = renderWithProviders(EditNoteScreen, {
      noteId: note.id,
    })

    jest.useFakeTimers()

    fireEvent.press(screen.getByTestId('edit-note-delete-button'))

    expect(selectAllNotes(store.getState())).toHaveLength(0)
    expect(screen.queryByText('Nota removida com sucesso!')).toBeTruthy()
    expect(goBackMock).toBeCalledTimes(1)
  })

  it('should show error message when try edit note without title', async () => {
    const screen = renderWithProviders(EditNoteScreen, {
      noteId: note.id,
    })

    const titleInput = await screen.findByTestId('edit-note-title-input')
    fireEvent.changeText(titleInput, '')

    jest.useFakeTimers()

    fireEvent.press(screen.getByTestId('edit-note-save-button'))

    expect(screen.queryByText('Sua nota precisa de um título!')).toBeTruthy()
  })
})
