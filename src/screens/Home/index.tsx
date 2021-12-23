import { useNavigation } from '@react-navigation/native'
import React, { useMemo, useState } from 'react'
import { ListRenderItem } from 'react-native'

import { NotesListItem } from '@/components/notes'
import { useDispatch, useSelector } from '@/store'
import { noteRemoved, selectAllNotes } from '@/store/notes'
import { Note } from '@/types'

import {
  Container,
  Title,
  SearchInput,
  SearchIcon,
  NotesList,
  AddButton,
  AddIcon,
} from './styles'

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const notes = useSelector(selectAllNotes)
  const [searchText, setSearchText] = useState('')

  const filteredNotesByText = useMemo(
    () => notes.filter(note => note.title.includes(searchText)),
    [notes, searchText],
  )

  const navigateToCreateNote = () => {
    navigation.navigate('CreateNoteScreen')
  }

  const handleDeleteNote = (noteId: string) => {
    dispatch(noteRemoved(noteId))
  }

  const renderNotesListItem: ListRenderItem<Note> = ({ item }) => {
    return (
      <NotesListItem
        {...item}
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
        data={filteredNotesByText}
        keyExtractor={item => item.id}
        renderItem={renderNotesListItem}
        testID="notes-list"
      />

      <AddButton
        icon={<AddIcon />}
        onPress={navigateToCreateNote}
        testID="add-note-button"
      />
    </Container>
  )
}

export default HomeScreen
