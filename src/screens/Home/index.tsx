import React, { useState } from 'react'
import { ListRenderItem } from 'react-native'

import { NotesListItem } from '@/components/notes'
import { useNavigation } from '@/routes'
import { useDispatch, useSelector } from '@/stores'
import { noteRemoved, selectAllNotesByTitle } from '@/stores/notes'
import { Note } from '@/types'

import {
  Container,
  Title,
  SearchInput,
  SearchIcon,
  NotesList,
  AddButton,
} from './styles'

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [searchText, setSearchText] = useState('')

  const notes = useSelector(selectAllNotesByTitle(searchText))

  const navigateToAddNote = () => navigation.navigate('AddNoteScreen')
  const navigateToEditNote = (noteId: string) =>
    navigation.navigate('EditNoteScreen', { noteId })

  const handleDeleteNote = (noteId: string) => {
    dispatch(noteRemoved(noteId))
  }

  const renderNotesListItem: ListRenderItem<Note> = ({ item }) => {
    return (
      <NotesListItem
        {...item}
        onPress={() => navigateToEditNote(item.id)}
        onDeleteNote={handleDeleteNote}
        testID={`notes-list-item-${item.id}`}
      />
    )
  }

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
        data={notes}
        keyExtractor={item => item.id}
        renderItem={renderNotesListItem}
        testID="notes-list"
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
