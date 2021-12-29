import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDate = (date?: string): string => {
  const parsedDate = parseISO(date || new Date().toISOString())
  return format(parsedDate, "dd 'de' LLLL 'de' yyyy', às 'HH:mm'h'", {
    locale: ptBR,
  })
}
