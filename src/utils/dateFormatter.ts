import { format, toZonedTime } from 'date-fns-tz'
import { ptBR } from 'date-fns/locale'

export default function dateFormatter(date: Date | string, full: boolean) {

    const timeZone = 'America/Sao_Paulo'

    const zonedDate = toZonedTime(new Date(date), timeZone)
    
    const pattern = full ? "dd 'de' MMMM 'de' yyyy" : 'MMMM yyy' 

    return format(zonedDate, pattern, {locale: ptBR, timeZone})
    
}