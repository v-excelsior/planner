import { styled } from 'utils/styles'
import { Box } from 'leafs'

import { Plan } from './plan'

export function Plans({ plans }) {
  return (
    <PlansContainer>
      { plans.map(plan => <Plan key={ plan.id } data={ plan }/>) }
    </PlansContainer>
  )
}

const PlansContainer = styled(Box)({
  display      : 'flex',
  flexDirection: 'row',
  flexWrap     : 'wrap',
  gap          : '10px',
})
