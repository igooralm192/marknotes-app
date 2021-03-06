import { useNavigation } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native'
import { mocked } from 'jest-mock'

import store from '@/stores'
import { cleanNotes, noteAdded } from '@/stores/notes'
import { mockNote, renderWithProviders } from '@/utils'
import HomeScreen from '.'

const note = mockNote()

describe('HomeScreen', () => {
  const navigateMock = jest.fn()

  beforeAll(() => {
    mocked(useNavigation).mockImplementation(() => ({
      navigate: navigateMock,
    }))
  })

  beforeEach(() => {
    store.dispatch(cleanNotes())
    store.dispatch(noteAdded(note))
  })

  it('should renders correctly', () => {
    const screen = renderWithProviders(HomeScreen)

    expect(screen.getByText('Notas')).toBeTruthy()
  })

  it('should render notes list and contains one note', () => {
    const screen = renderWithProviders(HomeScreen)

    const notesList = screen.getByTestId('notes-list')
    const notesListItem = screen.queryByTestId(`notes-list-item-${note.id}`)

    expect(notesList).toContainElement(notesListItem)
  })

  it('should navigate to AddNoteScreen when press add button', () => {
    const screen = renderWithProviders(HomeScreen)

    const addButton = screen.getByTestId('add-note-button')
    fireEvent.press(addButton)

    expect(navigateMock).toHaveBeenCalledWith('AddNoteScreen')
  })

  it('should render notes list and remove one note from screen', () => {
    const screen = renderWithProviders(HomeScreen)

    const notesList = screen.getByTestId('notes-list')
    expect(notesList.props.data).toHaveLength(1)

    jest.useFakeTimers()

    fireEvent.press(screen.getByTestId(`note-${note.id}-delete-button`))
    expect(notesList.props.data).toHaveLength(0)
    expect(screen.queryByText('Nota removida com sucesso!')).toBeTruthy()
  })

  it('should filter notes in list', async () => {
    const otherNote = mockNote()
    store.dispatch(noteAdded(otherNote))

    const screen = renderWithProviders(HomeScreen)

    const notesList = screen.getByTestId('notes-list')
    expect(notesList.props.data).toHaveLength(2)

    fireEvent.changeText(
      screen.getByTestId('search-notes-input'),
      otherNote.title,
    )

    const notesListItem = await screen.findByTestId(
      `notes-list-item-${otherNote.id}`,
    )
    expect(notesList).toContainElement(notesListItem)
    expect(notesList.props.data).toHaveLength(
      Number(note.title.includes(otherNote.title)) + 1,
    )
  })

  it('should navigate to EditNoteScreen when press on note list item', () => {
    const screen = renderWithProviders(HomeScreen)

    const notesListItem = screen.getByTestId(`notes-list-item-${note.id}`)
    fireEvent.press(notesListItem)

    expect(navigateMock).toHaveBeenCalledWith('EditNoteScreen', {
      noteId: note.id,
    })
  })
})
