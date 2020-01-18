import React, { useState } from 'react'
import firebaseApp from '../auth/firebaseApp'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { formStyles, InputField } from '../../styles/muiForms'
import { LoginButton } from '../../styles/muiButtons'
import pineapple from '../../images/davisco-rhUU1pemhQ0-unsplash 1.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const classes = formStyles()

  const onSubmit = async e => {
    e.preventDefault()

    await firebaseApp.auth().signInWithEmailAndPassword(email, password)

    history.push('/admin/dashboard')
  }

  return (
    <Grid
      container
      alignItems='center'
      justify='space-around'
      className={classes.root}
    >
      <Grid item>
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item>
            <Typography component='h2' variant='h2'>
              Log in to Student ArtCo!
            </Typography>
          </Grid>
          <Grid item>
            <form onSubmit={onSubmit}>
              <Grid
                container
                direction='column'
                alignItems='center'
                spacing={4}
              >
                <Grid item>
                  <InputField
                    placeholder='Email'
                    label='Email'
                    type='email'
                    name='email'
                    variant='outlined'
                    size='small'
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder='Password'
                    label='Password'
                    type='password'
                    name='password'
                    variant='outlined'
                    size='small'
                    fullWidth
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <LoginButton variant='outlined' size='small' type='submit'>
                    Submit
                  </LoginButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            No Account? Sign Up <Link to='/register'>Here</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src={pineapple} alt='blue pineapple' className={classes.image} />
      </Grid>
    </Grid>
  )
}

export default Login
