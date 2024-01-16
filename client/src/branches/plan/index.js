import { SessionsField } from 'branches'
import { Card, CardActions, CardContent, DateTimePicker, IconButton, Icons, TextField, Typography } from 'leafs'
import { removeLastSessionFx, saveSessionFx } from 'store'

import { DayJS } from 'utils/date'
import { styled } from 'utils/styles'
import { useState } from 'hooks'

const SUCCESS_COLOR = '#4BB54373'

export function Plan({ data }) {
  const { id, title, achievement, sessions } = data

  const [session, setSession] = useState({ created: Date.now() })

  const onAddClick = () => saveSessionFx({ planId: id, session })
  const onRemoveClick = () => removeLastSessionFx({ planId: id })

  const completionRate = (sessions.length / achievement).toFixed(4) * 100
  const isCompletedToday = !!sessions.length && DayJS(sessions[sessions.length - 1].created).isToday()

  const containerStyles = isCompletedToday ? { backgroundColor: SUCCESS_COLOR } : {}

  return (
    <PlanContainer sx={ containerStyles }>
      <PlanHeader>
        <Title>{ title } | { achievement }/{ sessions.length } | { completionRate }%</Title>
        <SessionsField sessions={ sessions } count={ achievement }/>
      </PlanHeader>

      <Actions>
        <IconButton onClick={ onRemoveClick }>
          <Icons.RemoveCircle/>
        </IconButton>

        <DateTimePicker
          label="Choose Date"
          size="small"
          defaultValue={ DayJS(session.created) }
          onChange={ v => setSession({ created: +v }) }
          slots={{
            textField: props => <TextField size="small" { ...props }/>,
          }}
        />

        <IconButton onClick={ onAddClick }>
          <Icons.AddCircle/>
        </IconButton>
      </Actions>
    </PlanContainer>
  )
}

const PlanHeader = styled(CardContent)({
  display      : 'flex',
  flexDirection: 'column',
  alignItems   : 'center',
})

const PlanContainer = styled(Card)({
  display       : 'flex',
  flexDirection : 'column',
  flexGrow      : 1,
  flexShrink    : 1,
  flexBasis     : '600px',
  justifyContent: 'space-between',
  alignItems    : 'center',
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
