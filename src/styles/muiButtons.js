import { withStyles, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { theme } from './theme'

export const BackButton = withStyles({
  root: {
    padding: theme.spacing(1.5),
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: '50%',
  },
})(ArrowBackIcon)

export const LoginButton = withStyles({
  root: {
    width: '150px',
    padding: theme.spacing(0.6),
    borderColor: '#fff',
    color: '#fff',
  },
})(Button)
