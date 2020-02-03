import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'

export const NavbarNonAuth = ({ classes, setReload }) => (
  <>
    <Grid item>
      <Button
        component={Link}
        to='/browse'
        className={classes.button}
        onClick={() => setReload(true)}
      >
        Browse
      </Button>
    </Grid>
    <Grid item>
      <Button component={Link} to='/team' className={classes.button}>
        About
      </Button>
    </Grid>
    <Grid item>
      <Button component={Link} to='/login' className={classes.button}>
        Sign In
      </Button>
    </Grid>
    <Grid item>
      <Button
        component={Link}
        to='/register'
        variant='outlined'
        disableElevation
        className={classes.button}
      >
        Join
      </Button>
    </Grid>
    <Grid item />
  </>
)
