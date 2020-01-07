import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Navigation = () => {
  return (
    <Grid container justify='space-between'>
      <Grid item>Logo</Grid>
      <Grid item>
        <Grid container>
          <Grid item>Browse</Grid>
          <Grid item>Sign In</Grid>
          <Grid item>Join</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navigation
