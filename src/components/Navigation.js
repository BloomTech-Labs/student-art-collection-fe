import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Button, makeStyles } from '@material-ui/core'
import firebaseApp from './auth/firebaseApp'
import { AuthContext } from './auth/Auth'
import logo from '../images/logo1.png'
import ReloadContext from './ReloadContext'

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
  const { setReload } = useContext(ReloadContext)
  const classes = useStyles()
  const history = useHistory()
  const { authenticated } = useContext(AuthContext)

  const signOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
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
          <img src={logo} alt='Student Artco' />
        </Link>
      </Grid>
      <Grid item>
        <Grid container spacing={5}>
          {authenticated === true ? (
            <Grid item>
              <Button component={Link} to='/admin/dashboard'>
                Dashboard
              </Button>
            </Grid>
          ) : null}
          <Grid item>
            <Button component={Link} to='/browse' onClick={() => setReload(true)}>
              Browse
            </Button>
          </Grid>
          <Grid item>
            {authenticated === true ? (
              <Button onClick={signOut}>Sign Out</Button>
            ) : (
              <Button component={Link} to='/login'>
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
                variant='contained'
                disableElevation
              >
                Join
              </Button>
            )}
            <Button disabled />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Navigation
