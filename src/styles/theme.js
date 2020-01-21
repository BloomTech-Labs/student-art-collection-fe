import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    h2: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '40px',
    },
    button: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '20px',
    },
  },
})
