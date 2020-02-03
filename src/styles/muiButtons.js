import { withStyles, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { theme } from './theme'

export const BackButton = withStyles({
  root: {
    height: '50px',
    width: '50px',
    padding: theme.spacing(1),
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: '50%',
    boxShadow: '1px 1px 1px rgba(0, 0, 0, .3)',
    backgroundColor: '#3CBBB1',
    fontSize: '50px', //? doesn't seem to be necessary in Chrome on Windows, but was having issues with the icon randomly disappearing - this appears to fix that
    '&:hover': {
      backgroundColor: '#23A298',
    },
    '&:active': {
      boxShadow: 'none',
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
