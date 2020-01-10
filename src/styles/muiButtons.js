import { withStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { theme } from './theme'

export const BackButton = withStyles({
  root: {
    padding: theme.spacing(1.5),
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: '50%',
  },
})(ArrowBackIcon)
