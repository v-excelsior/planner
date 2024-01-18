import DayJS from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

DayJS.extend(isToday)

const toReadable = timestamp => DayJS(timestamp).format('D/M/YYYY HH:mm')

function getStreak(sessions) {
  let streak = 0
  let prevDay = DayJS()

  for (let i = sessions.length - 1; i > 0; i--) {
    const currentDay = DayJS(sessions[i].created)

    if (currentDay.isSame(prevDay, 'day') || currentDay.subtract(1, 'day').isSame(prevDay, 'day')) {
      streak++
    } else {
      break
    }

    prevDay = currentDay
  }

  return streak
}

export { DayJS, toReadable, getStreak }
