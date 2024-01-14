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
  display  : 'flex',
  flexWrap : 'wrap',
  maxHeight: '180px',
  height   : '100%',
  overflow : 'auto',
})
