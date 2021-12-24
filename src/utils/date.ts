import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (date: Date): string => {
  return format(date, "dd 'de' LLLL 'de' yyyy', às 'HH:mm'h'", {
    locale: ptBR,
  })
}
