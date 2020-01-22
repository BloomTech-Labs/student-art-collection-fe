import React, { useState } from 'react'
import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import firebaseApp from '../auth/firebaseApp'
import { useHistory, Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { formStyles, InputField } from '../../styles/muiForms'
import { SubmitButton } from '../../styles/muiButtons'
import pineapple from '../../images/davisco-rhUU1pemhQ0-unsplash 1.png'

const REGISTER_USER = gql`
  mutation addSchool(
    $school_id: ID!
    $school_name: String!
    $email: String!
    $address: String!
    $city: String!
    $zipcode: String!
  ) {
    addSchool(
      school_id: $school_id
      school_name: $school_name
      email: $email
      address: $address
      city: $city
      zipcode: $zipcode
    ) {
      school_id
      school_name
      email
      address
      city
      zipcode
    }
  }
`

const Register = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const history = useHistory()
  const classes = formStyles()

  const [addSchool, /* { data, loading, error } */] = useMutation(REGISTER_USER)

  const onSubmit = async e => {
    e.preventDefault()
    //This newUser object needs to be added to the request to the backend to connect
    //the firebase user to the app user account
    const newUser = await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
    addSchool({
      variables: {
        school_id: newUser.user.uid,
        email,
        school_name: schoolName,
        address,
        city,
        zipcode,
      },
    })
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
            <Typography component='h2' variant='h2' gutterBottom>
              Welcome to Student ArtCo!
            </Typography>
            <Typography component='h3' variant='body1' align='center'>
              Fill out the form below, and get your school started today!
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
                    variant='outlined'
                    label='Email'
                    size='small'
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder='Password'
                    variant='outlined'
                    label='Password'
                    size='small'
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder='School Name'
                    variant='outlined'
                    label='School Name'
                    size='small'
                    type='text'
                    name='school name'
                    value={schoolName}
                    onChange={e => setSchoolName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder='Address'
                    variant='outlined'
                    label='Address'
                    size='small'
                    type='text'
                    name='address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder='City'
                    variant='outlined'
                    label='City'
                    size='small'
                    type='text'
                    name='city'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <InputField
                    placeholder='ZIP Code'
                    variant='outlined'
                    label='ZIP Code'
                    size='small'
                    type='text'
                    name='zipcode'
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item>
                  <SubmitButton variant='contained' size='small' type='submit'>
                    Submit
                  </SubmitButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              Already a member? Sign in{' '}
              <Link to='/login' className={classes.link}>
                Here
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img src={pineapple} alt='blue pineapple' className={classes.image} />
      </Grid>
    </Grid>
  )
}

export default Register
