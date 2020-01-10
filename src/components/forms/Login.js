import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from 'react-apollo';
import firebaseApp from '../auth/firebaseApp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      password
    }
  }
`

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const onSubmit = async e => {
    e.preventDefault();

    const user = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    console.log('User from Firebase', user)
    //loginUser({ variables: { email, password } })
  };

  return (
    <>
    <h2 style={styles.heading}>Login to Student ArtCo!</h2>
    <Box display='flex' justifyContent='center'>
      <form onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          label='Email'
          style={styles.textfield}
          size='small'
          fullWidth={true}
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required={true}
        />
        <TextField
          variant='outlined'
          label='Password'
          style={styles.textfield}
          size='small'
          fullWidth={true}
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required={true}
        />
        <Box display='flex' justifyContent='center'>
        {/* <Button
          variant='contained'
          style={styles.button}
          color='primary'
          type='submit'
        >
          Login
        </Button> */}
        </Box>
        </form>
        <br/>
        </Box>
        <LoginP>No Account? Sign Up <Link to='/register'>Here</Link></LoginP>
    </>
  );
};

const LoginP = styled.p`
    text-align: center;
    font-family: 'Nunito';
`

const styles = {
  heading: {
    fontFamily: 'Barlow',
    margin: '80px 15px 15px 45px',
    textAlign: 'center'
  },
  textfield: {
    margin: 15,
  },
  button: {
    margin: 15,
  },
};

export default Login;
