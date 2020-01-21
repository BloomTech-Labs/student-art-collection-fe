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

export const EditButton = withStyles({
  root: {
    width: '100px',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderColor: '#000',
    textTransform: 'none',
    color: '#000',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
})(Button)

export const DeleteButton = withStyles({
  root: {
    width: '100px',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderColor: '#FF0404',
    textTransform: 'none',
    color: '#FF0404',
    '&:hover': {
      backgroundColor: 'rgba(255, 4, 4, 0.1)',
    },
  },
})(Button)
