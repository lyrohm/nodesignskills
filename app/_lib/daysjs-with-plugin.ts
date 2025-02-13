import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import duration from 'dayjs/plugin/duration'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dayjs/locale/fr')

dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(advancedFormat)

dayjs.extend(localizedFormat)
dayjs().format('L LT')

dayjs.extend(duration)

dayjs.locale('fr')
dayjs.extend(relativeTime)

// Gérer les fuseaux horaires
dayjs.extend(utc)
dayjs.extend(timezone)
// dayjs(date).tz(); // Convertir la date dans le fuseau horaire configuré

export default dayjs
