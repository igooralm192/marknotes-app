import '@react-navigation/native'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      HomeScreen: undefined
      AddNoteScreen: undefined
    }
  }
}
