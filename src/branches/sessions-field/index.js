import { memo } from 'react'

import { styled } from 'utils/styles'

import { Session } from './session'

export const SessionsField = memo(function Minefield({ sessions, count }) {
  const sessionsElements = []

  for (let i = 0; i < count; i++) {
    sessionsElements.push(
      <Session
        key={ i }
        data={ sessions[i] }
      />
    )
  }

  return (
    <Field>
      { sessionsElements }
    </Field>
  )
})

const Field = styled('div')({
  display            : 'grid',
  gridAutoFlow       : 'column',
  gridTemplateRows   : 'repeat(5, minmax(24px, 1fr))',
  gridTemplateColumns: 'repeat(auto-fill, minmax(24px, 1fr))',
  height             : '100%',
  overflow           : 'auto',
  maxWidth           : '480px',
})

