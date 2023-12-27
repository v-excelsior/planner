import { Plan } from 'branches'

import { styled } from 'utils/styles'
import { useEffect, useState } from 'hooks'

import { Providers } from './providers'

console.log('HUGE LOG THAT I CANT MISS')

function App() {
  const [data, setData] = useState({ plans: [] })

  useEffect(() => {
    async function loadData() {
      const data = await fetch('http://localhost:3001/plans')
        .then(r => r.json())

      setData(data)
    }

    loadData()
  }, [])

  const { plans } = data

  return (
    <Providers>
      <AppContainer className="App">
        { Object.keys(plans).map(key => (<Plan key={ key } data={ plans[key] }/>)) }
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
