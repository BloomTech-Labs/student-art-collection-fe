import { makeStyles, withStyles, TextField } from '@material-ui/core'

export const formStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    background: '#FFAA04',
  },
  image: {
    maxHeight: '600px',
    borderRadius: '10px',
  },
  link: {
    color: '#00554B',
    textDecoration: 'none',
  },
}))

export const InputField = withStyles({
  root: {
    '& .MuiFormLabel-root': {
      color: '#fff ',
    },
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#3CBBB1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3CBBB1',
        borderWidth: '1px',
      },
    },
    '& .MuiOutlinedInput-input': {
      color: '#000',
    },
    width: '325px',
  },
})(TextField)
