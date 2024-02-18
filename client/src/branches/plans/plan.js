import { useUnit } from 'effector-react'

import { SessionsField } from 'branches'
import { DayJS, getStreak } from 'utils/date'
import { styled } from 'utils/styles'
import { Card, CardActions, CardContent, IconButton, Icons, Typography } from 'leafs'
import { $session, removeLastSessionFx, saveSessionFx } from 'store'

const SUCCESS_COLOR = '#4BB54373'

export function Plan({ data }) {
  const { id, title, achievement, sessions } = data

  const currentSessionState = useUnit($session)

  const onAddClick = () => saveSessionFx({ planId: id, session: currentSessionState })
  const onRemoveClick = () => removeLastSessionFx({ planId: id })

  const completionRate = parseFloat(((sessions.length / achievement) * 100).toFixed(4))
  const isCompletedToday = !!sessions.length && DayJS(sessions[sessions.length - 1].created).isToday()
  const streak = getStreak(sessions)

  const containerStyles = isCompletedToday ? { backgroundColor: SUCCESS_COLOR } : {}

  return (
    <PlanContainer sx={ containerStyles }>
      <PlanHeader>
        <Title>{ title } | { achievement }/{ sessions.length } | { completionRate }%</Title>
        <Subtitle>Streak: { streak }</Subtitle>
        <SessionsField sessions={ sessions } count={ achievement }/>
      </PlanHeader>

      <Actions>
        <IconButton onClick={ onRemoveClick }>
          <Icons.RemoveCircle/>
        </IconButton>

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
  fontSize: '24px',
})

const Subtitle = styled(Typography)({
  fontSize: '12px',
})

const Actions = styled(CardActions)({
  display       : 'flex',
  flexDirection : 'row',
  justifyContent: 'space-between',
  alignItems    : 'center',
})
