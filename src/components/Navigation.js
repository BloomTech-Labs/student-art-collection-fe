import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Button, makeStyles, Typography } from '@material-ui/core'
import firebaseApp from './auth/firebaseApp'

//todo colors & fonts

const useStyles = makeStyles(theme => ({
  space: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  logo: {
    textDecoration: 'none',
    color: 'black',
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const history = useHistory()

  const signOut = () => {
    firebaseApp.auth().signOut().then(() => {
      history.push('/login')
    })
  }

  return (
    <Grid
      container
      alignItems='center'
      justify='space-between'
      className={classes.space}
    >
      <Grid item>
        <Link to='/' className={classes.logo}>
          <Typography variant='h4'>SA</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          <Grid item>
            <Button component={Link} to='/browse'>
              Browse
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={signOut}>
              Sign Out
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
