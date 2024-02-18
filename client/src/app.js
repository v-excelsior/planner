import { Plans, SessionForm } from 'branches'
import { styled } from 'utils/styles'
import { Box } from 'leafs'
import { useEffect, useUnit } from 'hooks'
import { Providers } from 'providers'
import { $plans, loadPlansFx } from 'store'

function App() {
  const plans = useUnit($plans)

  useEffect(() => void loadPlansFx(), [])

  return (
    <Providers>
      <AppContainer className="App">
        <SessionForm/>
        <Plans plans={ plans }/>
      </AppContainer>
    </Providers>
  )
}

const AppContainer = styled(Box)({
  padding      : '10px',
  display      : 'flex',
  flexDirection: 'column',
  gap          : '10px',
})

export default App
