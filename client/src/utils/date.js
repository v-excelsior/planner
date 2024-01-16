import DayJS from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

DayJS.extend(isToday)

const toReadable = timestamp => DayJS(timestamp).format('D/M/YYYY HH:mm')

export { DayJS, toReadable }
