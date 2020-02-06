import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'

export const NavbarAuth = ({ classes, reload, setReload, signOut }) => {
  return (
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
        <Button
          component={Link}
          to='/admin/dashboard'
          className={classes.button}
        >
          Dashboard
        </Button>
      </Grid>
      <Grid item>
        <Button 
          component={Link} to='/admin/profile' 
          className={classes.button}
          onClick={() => setReload(true)}
        >
          Profile
        </Button>
      </Grid>
      <Grid item>
        <Button component={Link} to='/team' className={classes.button}>
          About
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={signOut} variant='outlined' className={classes.button}>
          Sign Out
        </Button>
      </Grid>
      <Grid item />
    </>
  )
}
