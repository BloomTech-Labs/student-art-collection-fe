import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Button, AppBar, makeStyles } from '@material-ui/core'
import firebaseApp from './auth/firebaseApp'
import { AuthContext } from './auth/Auth'
import { NavbarNonAuth } from './NavbarNonAuth'
import { NavbarAuth } from './NavbarAuth'
// import logo from '../images/logo1.png'
import logo from '../images/ArtcoWhiteLogo.png'
import HideOnScroll from './HideOnScroll'
import ReloadContext from './ReloadContext'
// import ScrollTop from './ScrollTop'
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
  space: {
    padding: theme.spacing(),
  },
  logo: {
    textDecoration: 'none',
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
  },
  appbar: {
    background: '#000',
  },
}))

const Navigation = props => {
  const { setReload } = useContext(ReloadContext)
  const classes = useStyles()
  const history = useHistory()
  const { authenticated } = useContext(AuthContext)

  const signOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        history.push('/browse')
      })
  }

  return (
    <HideOnScroll {...props}>
      <AppBar className={classes.appbar} position='sticky'>
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
              {authenticated === false ? (
                <NavbarNonAuth classes={classes} setReload={setReload} />
              ) : (
                <NavbarAuth
                  classes={classes}
                  setReload={setReload}
                  signOut={signOut}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navigation
