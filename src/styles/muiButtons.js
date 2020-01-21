import { withStyles, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { theme } from './theme'

export const BackButton = withStyles({
  root: {
    padding: theme.spacing(1.5),
    backgroundColor: '#3CBBB1',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: '#23A298',
    },
  },
})(ArrowBackIcon)

export const SubmitButton = withStyles({
  root: {
    width: '150px',
    padding: theme.spacing(0.6),
    backgroundColor: '#3CBBB1',
    borderColor: '#fff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#23A298',
    },
  },
})(Button)
