import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    marginTop: '-40px',
    marginBottom: '50px',
    padding: theme.spacing(5),
    background: '#000',
    color: '#f5f5f5',
  },
}))

export const BrowseQuote = () => {
  const classes = useStyles()

  return (
    <Grid container justify='center' className={classes.container}>
      <Grid item>
        <Typography variant='h3'>
          "Art enables us to find ourselves and lose ourselves at the same
          time."
        </Typography>
        <Typography variant='body1'>- Thomas Merton</Typography>
      </Grid>
    </Grid>
  )
}
