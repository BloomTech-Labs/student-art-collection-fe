import { createMuiTheme } from '@material-ui/core'

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Barlow', 'sans-serif'].join(','),
    h2: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '2.5rem',
    },
    p: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.5rem',
    },
    h3: {
      fontFamily: ['Barlow', 'sans-serif'].join(','),
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.75rem',
    },
    h5: {},
    button: {
      fontFamily: ['Avenir', 'sans-serif'].join(','),
      fontSize: '1rem',
    },
    h6: {
      
    }
  },
})
