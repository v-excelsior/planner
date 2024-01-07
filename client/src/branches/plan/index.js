import { SessionsField } from 'branches'
import { Card, CardActions, CardContent, DateTimePicker, IconButton, Icons, Typography } from 'leafs'
import { saveSessionFx } from 'store'

import { DayJS } from 'utils/date'
import { styled } from 'utils/styles'
import { useState } from 'hooks'

export function Plan({ data }) {
  const { id, title, achievement, sessions } = data

  const [session, setSession] = useState({ created: Date.now() })

  const onClick = () => saveSessionFx({ planId: id, session })

  const completionRate = (sessions.length / achievement || 0).toFixed(2)

  return (
    <PlanContainer>
      <CardContent>
        <Title>{ title } ({ completionRate }%)</Title>
        <SessionsField sessions={ sessions } count={ achievement }/>
      </CardContent>

      <Actions>
        <DateTimePicker
          label="Choose Date"
          size="small"
          defaultValue={ DayJS(session.created) }
          onChange={ v => setSession({ created: +v }) }
        />

        <IconButton onClick={ onClick }>
          <Icons.AddCircle/>
        </IconButton>
      </Actions>
    </PlanContainer>
  )
}

const PlanContainer = styled(Card)({
  display       : 'flex',
  flexDirection : 'column',
  justifyContent: 'space-between',
  alignItems    : 'center',
  margin        : '10px auto',
  width         : 'max-content',
})

const Title = styled(Typography)({
  textAlign: 'start',
  fontSize : '24px',
})

const Actions = styled(CardActions)({
  display       : 'flex',
  flexDirection : 'row',
  justifyContent: 'space-between',
  alignItems    : 'center',
})
