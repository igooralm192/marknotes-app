import React, { useMemo, useState } from 'react'

import { useNotes } from '@/contexts'
import { useNavigation } from '@/routes'
import { noteTitleIncludesText } from '@/stores/notes'

import {
  Container,
  Title,
  SearchInput,
  SearchIcon,
  NotesList,
  AddButton,
} from './styles'

const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const [searchText, setSearchText] = useState('')
  const { notes, deleteNote } = useNotes()

  const notesFilteredByTitle = useMemo(
    () => notes.filter(noteTitleIncludesText(searchText)),
    [notes, searchText],
  )

  const navigateToAddNote = () => navigation.navigate('AddNoteScreen')
  const navigateToEditNote = (noteId: string) =>
    navigation.navigate('EditNoteScreen', { noteId })

  return (
    <Container>
      <Title>Notas</Title>

      <SearchInput
        placeholder="Pesquise suas notas!"
        onChangeText={setSearchText}
        InputLeftElement={<SearchIcon />}
        testID="search-notes-input"
      />

      <NotesList
        notes={notesFilteredByTitle}
        onPressNote={navigateToEditNote}
        onDeleteNote={deleteNote}
      />

      <AddButton
        icon="plus"
        onPress={navigateToAddNote}
        testID="add-note-button"
      />
    </Container>
  )
}

export default HomeScreen
