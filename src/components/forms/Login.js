import React, { useState } from 'react'
import firebaseApp from '../auth/firebaseApp'
import { Link, useHistory } from 'react-router-dom'
import { Grid, Typography, useMediaQuery, Container } from '@material-ui/core'
import { formStyles, InputField } from '../../styles/muiForms'
import { SubmitButton } from '../../styles/muiButtons'
// import pineapple from '../../images/davisco-rhUU1pemhQ0-unsplash 1.png'
import loginart from '../../images/mr-tt-xb0wLfZH9Zo-unsplash.jpg'
import styled from 'styled-components'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const classes = formStyles()
  const breakpoint = useMediaQuery('(min-width: 1200px)')

  const onSubmit = async e => {
    e.preventDefault()

    await firebaseApp.auth().signInWithEmailAndPassword(email, password)

    history.push('/admin/dashboard')
  }

  return (
    <ContainerDiv>
      <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Grid
        container
        alignItems='center'
        justify='space-around'
        className={classes.root}
      >
        <Grid item>
          <Grid container direction='column' alignItems='center' spacing={5}>
            <Grid item>
              <Typography variant='h2'>
                Login to Student ArtCo
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
                    <SubmitButton
                      variant='contained'
                      size='medium'
                      type='submit'
                    >
                      Submit
                    </SubmitButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: '1.25rem' }}>
                No Account? Sign Up{' '}
                <Link to='/register' className={classes.link}>
                  Here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {breakpoint ? 
        <Grid item>
          <img src={loginart} alt='art graffiti' className={classes.image} />
        </Grid> : null}
      </Grid>
      </Container>
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #266863
`

export default Login
