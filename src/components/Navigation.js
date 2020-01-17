import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Button, AppBar, makeStyles } from '@material-ui/core'
import firebaseApp from './auth/firebaseApp'
import { AuthContext } from './auth/Auth'
import logo from '../images/logo1.png'

const useStyles = makeStyles(theme => ({
  // space: {
  //   marginBottom: theme.spacing(3),
  //   marginTop: theme.spacing(1),
  // },
  logo: {
    textDecoration: 'none',
    // color: '#000',
    padding: '10px'
  },
  button: {
    color: '#fff',
    borderColor: '#fff'
  },
  appbar: {
    background: '#000',
    height: '8%', 
  }
}))

const Navigation = () => {
  const classes = useStyles()
  const history = useHistory()
  const { authenticated } = useContext(AuthContext)
  console.log(`auth >>>`, authenticated)

  const signOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        history.push('/login')
      })
  }

  return (
   <AppBar className={classes.appbar}>
    <Grid
      container
      alignItems='center'
      justify='space-between'
      className={classes.space}
    >
      <Grid item>
        <Link to='/' className={classes.logo}>
          <img src={logo} alt='Student Artco' />
        </Link>
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          {authenticated === true ? (
            <Grid item>
              <Button component={Link} to='/admin/dashboard' className={classes.button}>
                Dashboard
              </Button>
            </Grid>
          ) : null}
          <Grid item>
            <Button component={Link} to='/browse' className={classes.button}>
              Browse
            </Button>
          </Grid>
          <Grid item>
            {authenticated === true ? (
              <Button onClick={signOut} variant='outlined' className={classes.button}>Sign Out</Button>
            ) : (
              <Button component={Link} to='/login' className={classes.button}>
                Sign In
              </Button>
            )}
          </Grid>
          <Grid item>
            {authenticated === true ? (
              <Button disabled />
            ) : (
              <Button
                component={Link}
                to='/register'
                variant='outlined'
                disableElevation
                className={classes.button}
              >
                Join
              </Button>
            )}
            <Button disabled />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </AppBar>
  )
}

export default Navigation
