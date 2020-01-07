import React from 'react'
import { Grid, Typography } from '@material-ui/core'

// import { Navigation } from '../components'

//todo uncomment { Navigation } import and <Navigation /> when ready
//todo heading should be all caps i.e. text-transform: uppercase

const BrowseListings = () => {
  return (
    <Grid container direction='column'>
      <Grid item component='header'>
        <Grid container direction='column' spacing={5}>
          <Grid item>
            {/* <Navigation /> */}
            <div>Placeholder for navbar</div>
          </Grid>
          <Grid item>
            <Typography variant='h1' component='h1' gutterBottom={true}>
              Welcome
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>Images go here</Grid>
    </Grid>
  )
}

export default BrowseListings
