import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { Theme } from './theme'

export function Providers({ children }) {
  return (
    <Theme>
      <LocalizationProvider dateAdapter={ AdapterDayjs }>
        { children }
      </LocalizationProvider>
    </Theme>
  )
}
