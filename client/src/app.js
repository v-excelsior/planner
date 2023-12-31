import { Plan } from 'branches'
import { useUnit } from 'effector-react'
import { $plans, loadPlansFx } from 'store'

import { styled } from 'utils/styles'
import { useEffect } from 'hooks'

import { Providers } from './providers'

function App() {
  const plans = useUnit($plans)

  useEffect(() => void loadPlansFx(), [])

  return (
    <Providers>
      <AppContainer className="App">
        { plans.map(plan => (<Plan key={ plan.id } data={ plan }/>)) }
      </AppContainer>
    </Providers>
  )
}

const AppContainer = styled('div')({
  display      : 'flex',
  flexDirection: 'column',
  gap          : '12px',
})

export default App
