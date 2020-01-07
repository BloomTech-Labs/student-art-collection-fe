import React from 'react'
// import { Link } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'

//todo uncomment { Link } import and <Link> when router is set up
//todo add to='...' in <Link>
//todo customize buttons to not use all caps - i.e. text-transform: none
//todo possibly pull out buttons into separate style file
//todo colors & fonts

const Navigation = () => {
  return (
    <Grid container justify='space-between'>
      <Grid item>Logo</Grid>
      <Grid item>
        <Grid container spacing={5}>
          <Grid item>
            {/* <Link> */}
            <Button>Browse</Button>
            {/* </Link> */}
          </Grid>
          <Grid item>
            {/* <Link> */}
            <Button>Sign In</Button>
            {/* </Link> */}
          </Grid>
          <Grid item>
            {/* <Link> */}
            <Button variant='contained' disableElevation>
              Join
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navigation
