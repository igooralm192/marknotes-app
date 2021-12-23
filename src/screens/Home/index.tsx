import React from 'react'
import { ListRenderItem } from 'react-native'

import { NotesListItem } from '@/components/notes'
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
import { useNavigation } from '@react-navigation/native'

const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const navigateToCreateNote = () => {
    navigation.navigate('CreateNoteScreen')
  }

  const handleDeleteNote = (_noteId: string) => {}

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
        InputLeftElement={<SearchIcon />}
      />

      <NotesList
        data={[
          {
            id: 'any_id',
            title: 'Coisas para fazer',
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            date: new Date(),
          },
        ]}
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
