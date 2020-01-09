import React from 'react'
import { Navigation, ImageMasonry } from '../components'
import { Grid, Typography } from '@material-ui/core'

//todo heading should be all caps i.e. text-transform: uppercase

const BrowseListings = () => {
  return (
    <Grid container direction='column'>
      <Grid item component='header'>
        <Grid container direction='column' spacing={5}>
          <Grid item>
            <Navigation />
          </Grid>
          <Grid item>
            <Typography variant='h3' component='h1' gutterBottom>
              Browse beautiful art and support
              <br /> your community!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ImageMasonry />
      </Grid>
    </Grid>
  )
}

export default BrowseListings
