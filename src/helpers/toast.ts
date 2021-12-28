import { Toast } from 'native-base'

export const success = (message: string): void =>
  Toast.show({
    title: message,
    placement: 'bottom',
    status: 'success',
  })

export const error = (message: string): void =>
  Toast.show({
    title: message,
    placement: 'bottom',
    status: 'error',
  })
