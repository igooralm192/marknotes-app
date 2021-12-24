import faker from 'faker'
import { Note } from '@/types'

export const mockNote = (): Note => {
  return {
    id: faker.datatype.uuid(),
    title: faker.random.words(),
    content: faker.random.words(),
    date: faker.datatype.datetime(),
  }
}
