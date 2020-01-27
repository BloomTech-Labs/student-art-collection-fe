import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    h2: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '2.5rem',
    },
    p: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
    },
    button: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
})
