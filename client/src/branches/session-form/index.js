import { DayJS } from 'utils/date'
import { styled } from 'utils/styles'
import { Box, DateTimePicker, TextField } from 'leafs'
import { useCallback, useMemo, useUnit } from 'hooks'
import { $session, s_setSession } from 'store'

export function SessionForm() {
  const session = useUnit($session)

  const onDateChange = useCallback(v => s_setSession({ created: +v }), [])
  const pickerSlots = useMemo(() => ({
    textField: props => <TextField size="small" { ...props }/>,
  }), [])

  return (
    <Container>
      <DateTimePicker
        label="Choose Date"
        ampm={ false }
        defaultValue={ DayJS(session.created) }
        onChange={ onDateChange }
        slots={ pickerSlots }
      />
    </Container>
  )
}

const Container = styled(Box)({
  alignSelf: 'center',
  margin: '15px',
})
