import { memo } from 'react'
import { Checkbox, Tooltip } from 'leafs'

import { toReadable } from 'utils/date'

export const Session = memo(function Session({ data }) {
  const { created } = data || {}

  return (
    <Tooltip title={ created ? toReadable(created) : null }>
      <Checkbox
        size="small"
        sx={{ p: '2px', m: 0 }}
        checked={ !!created }
        disableRipple
      />
    </Tooltip>
  )
})
