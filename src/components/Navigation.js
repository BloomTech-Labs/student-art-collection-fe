import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'

//todo uncomment { Link } import and <Link> when router is set up
//todo add to='...' in <Link>
//todo customize buttons to not use all caps - i.e. text-transform: none
//todo possibly pull out buttons into separate style file
//todo colors & fonts

const Navigation = () => {
  return (
    <Grid container justify='space-between'>
      <Grid item>
        <Link to='/'>Logo</Link>
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          <Grid item>
            <Button component={Link} to='/browse'>
              Browse
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to='/login'>
              Sign In
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to='/register'
              variant='contained'
              disableElevation
            >
              Join
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navigation
