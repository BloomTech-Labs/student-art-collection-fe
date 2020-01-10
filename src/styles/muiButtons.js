import { withStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { theme } from './theme'

export const BackButton = withStyles({
  root: {
    padding: theme.spacing(1.5),
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,.2)',
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest,
      }),
    },
  },
})(ArrowBackIcon)
