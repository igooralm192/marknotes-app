import { useNavigation } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native'
import { mocked } from 'jest-mock'

import store from '@/store'
import { cleanNotes, noteAdded } from '@/store/notes'
import { mockNote, renderWithProviders } from '@/utils'
import HomeScreen from '.'

const note = mockNote()

describe('HomeScreen', () => {
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

  it('should navigate to CreateNoteScreen when press add button', () => {
    const useNavigationMocked = mocked(useNavigation)
    const navigateMock = jest.fn()

    useNavigationMocked.mockImplementationOnce(() => ({
      navigate: navigateMock,
    }))

    const screen = renderWithProviders(HomeScreen)

    const addButton = screen.getByTestId('add-note-button')
    fireEvent.press(addButton)

    expect(navigateMock).toHaveBeenCalledWith('AddNoteScreen')
  })

  it('should render notes list and remove one note from screen', () => {
    const screen = renderWithProviders(HomeScreen)

    const notesList = screen.getByTestId('notes-list')
    expect(notesList.props.data).toHaveLength(1)

    fireEvent.press(screen.getByTestId(`note-${note.id}-delete-button`))
    expect(notesList.props.data).toHaveLength(0)
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
})
