import { Column } from 'native-base'
import React from 'react'

import * as UI from '@/components/ui'

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Column bg="background.500" flex={1} padding={6}>
      <UI.Typography variant="header">Notas</UI.Typography>
    </Column>
  )
}

export default HomeScreen
