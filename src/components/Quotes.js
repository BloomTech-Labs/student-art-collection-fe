import React from 'react'
import { makeStyles, Grid, Typography, Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    marginBottom: '50px',
    padding: '50px',
    background: '#000',
    color: '#f5f5f5',
  },
}))

export const BrowseQuote = () => {
  const classes = useStyles()

  return (
    <Grid container justify='center' className={classes.container}>
      <Grid item>
        <Typography style={{ fontSize: '2.5rem' }}>
          "Art enables us to find ourselves and lose ourselves at the same
          time."
        </Typography>
        <Typography variant='body1' style={{ color: 'orange', fontSize: '2rem' }}>-Thomas Merton</Typography>
      </Grid>
    </Grid>
  )
}
