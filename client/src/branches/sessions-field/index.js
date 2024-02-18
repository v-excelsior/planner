import { styled } from 'utils/styles'
import { memo, useMemo } from 'hooks'

import { Session } from './session'

export const SessionsField = memo(function Minefield({ sessions, count }) {
  const sessionsElements = useSessionsElements(sessions, count)

  return (
    <Field>
      { sessionsElements }
    </Field>
  )
})

const useSessionsElements = (sessions, count) => {
  return useMemo(() => {
    const sessionsElements = []

    for (let i = 0; i < count; i++) {
      sessionsElements.push(<Session key={ i } data={ sessions[i] } />)
    }

    return sessionsElements
  }, [sessions, count])
}

const Field = styled('div')({
  display  : 'flex',
  flexWrap : 'wrap',
  maxHeight: '180px',
  height   : '100%',
  overflow : 'auto',
})
