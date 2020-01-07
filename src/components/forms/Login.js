import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from 'react-apollo';
import firebaseApp from '../auth/firebaseApp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    await firebaseApp.auth().signInWithEmailAndPassword(email, password);

    loginUser({ variables: { email, password } })
  };

  return (
    <>
      <h2 style={styles.heading}>Sign Into Student ArtCo!</h2>
      <form onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          label='Email'
          margin='normal'
          style={styles.textfield}
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant='outlined'
          label='Password'
          margin='normal'
          style={styles.textfield}
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          variant='contained'
          style={styles.button}
          color='primary'
          type='submit'
        >
          Login
        </Button>
      </form>
    </>
  );
};

const styles = {
  heading: {
    margin: 10,
  },
  textfield: {
    margin: 10,
  },
  button: {
    margin: 10,
  },
};

export default Login;
