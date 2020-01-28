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
    h3: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
    },
    button: {
      fontFamily: ['Avenir', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
  },
})
