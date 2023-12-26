import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export function Providers({ children }) {
  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      { children }
    </LocalizationProvider>
  )
}
