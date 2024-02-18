import { CssBaseline, GlobalStyles } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette   : {
    mode     : 'dark',
    primary  : {
      main: '#dd2c00',
    },
    secondary: {
      main: '#212121',
    },
    divider  : '#ff1744',
  },
  props     : {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiTooltip   : {
      arrow: true,
    },
  },
  typography: {
    fontFamily: 'system-ui',
  },
})

const globalStyles = {
  '::-webkit-scrollbar-track': {
    borderRadius   : 3,
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    backgroundColor: '#000000',
  },

  '::-webkit-scrollbar': {
    width          : 6,
    height          : 6,
    backgroundColor: '#000000',
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: 3,
    backgroundColor: '#F5F5F5',
  },
}

export function Theme({ children }) {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles styles={ globalStyles }/>
      <CssBaseline enableColorScheme/>
      { children }
    </ThemeProvider>
  )
}
