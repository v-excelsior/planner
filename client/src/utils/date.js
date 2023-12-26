import DayJS from 'dayjs'

const toReadable = timestamp => DayJS(timestamp).format('D/M/YYYY HH:mm')

export { DayJS, toReadable }
