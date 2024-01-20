import DayJS from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'

DayJS.extend(isToday)
DayJS.extend(isYesterday)

const toReadable = timestamp => DayJS(timestamp).format('D/M/YYYY HH:mm')

function getStreak(sessions) {
  let streak = 0

  const dates = sessions.map(session => DayJS(session.created))

  let once = true

  for (let i = dates.length - 1; i >= 0; i--) {
    const currentDay = dates[i]
    const prevDay = i ? dates[i - 1] : null

    if (currentDay.isToday() || currentDay.isYesterday()) {
      if (once) {
        once = false
        streak++
      }
    }

    if (
      prevDay && prevDay.isSame(currentDay.subtract(1, 'day'), 'day')
      || prevDay && prevDay.isSame(currentDay, 'day')
    ) {
      streak++
    } else {
      break
    }
  }

  return streak
}

export { DayJS, toReadable, getStreak }
