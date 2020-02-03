import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Barlow', 'sans-serif'].join(','),
    h2: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '2.5rem',
    },
    body1: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.25rem',
    },
    h3: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.5rem',
      lineHeight: '2.5rem'
    },
    button: {
      fontFamily: ['Avenir', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    h6: {},
  },
})
